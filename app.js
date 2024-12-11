// Importações

import dotenv from 'dotenv';
import express from 'express';
import handlebars from 'express-handlebars';
import { sequelize, Sequelize } from './models/db.js';

//

const app = express();
const port = process.env.PORT;


// Config 

    //dotenv

    dotenv.config(); 

    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
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
        console.log('Servidor Rodando na Rota Raiz');
        res.send('Rota Raiz funcionando');
    });

    app.get('/cad', (req, res) =>{
        console.log('Rodando no endereço de cadastro!');
        return res.render('formulario');
    });

    app.post('/add', (req, res) =>{
        res.send(`Formulário recebido! Título: ${req.body.titulo} Conteúdo: ${req.body.conteudo}`);
    });

    app.listen(port, (req,res) =>{
        console.log(`Rodando na porta ${port}`);
    });

    // app.get('/ola', (req,res)=>{
    //     res.sendFile(__dirname + '/html/index.html');
    //     console.log('Testando');
    // });