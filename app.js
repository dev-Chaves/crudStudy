// Importações

import dotenv from 'dotenv';
import express from 'express';
import handlebars, { engine } from 'express-handlebars';
import { sequelize, Sequelize } from './models/db.js';
import {Post} from "./models/Post.js"
import { where } from 'sequelize';
//

const app = express();
const port = process.env.PORT;


// Config 

    //dotenv

    dotenv.config();

    // Template Engine
    app.engine(
        'handlebars',
        engine({
            runtimeOptions: {
                allowProtoPropertiesByDefault: true, // Permite acesso a propriedades de protótipo
                allowProtoMethodsByDefault: true,   // Permite acesso a métodos de protótipo
            },
        })
    );
    
    app.set('view engine', 'handlebars');

// Body-Parser

    app.use(express.urlencoded());
    app.use(express.json());

// TESTANDO CONEXÃO COM O BANCO DE DADOS: 

    sequelize.authenticate().then(function(){
        console.log('Conectado com Sucesso');
    }).catch(function(erro){
        console.log(`Falha ao se conectar, ERRO: ${erro}`);
    });

// Rotas
    
    app.get('/', (req,res) =>{
        Post.findAll({order: [['id', 'DESC']] }).then((posts)=>{
            res.render('home',{
                posts: posts
            });

        })

    });

    app.get('/cad', (req, res) =>{
        console.log('Rodando no endereço de cadastro!');
        return res.render('formulario');
    });

    app.post('/add', (req, res) =>{

        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(()=>{
            res.redirect('/');
        }).catch((err)=>{
            res.send(`Houve um erro: ${err}`);
        });

    });

    app.get('/deletar/:id', function(req, res){

        console.log('requistada com sucesso');

        Post.destroy({
            where:{'id': req.params.id}    
        }).then(()=>{
            res.send('Postagens deletada');
        }).catch((err)=>{
            res.send(`Erro: ${err}`);
        });
    });

    // app.get('/editado/:id', function(req, res){

    //     Post.update({
    //         titulo: req.body.titulo,
    //         conteudo: req.body.conteudo
    //     },{
    //         where:{id:req.params.id}
    //     }).then(()=>{
    //         res.redirect('/');
    //     }).catch((err)=>{
    //         console.log(err);
    //     });

    // });

    app.listen(port, (req,res) =>{
        console.log(`Rodando na porta ${port}`);
    });