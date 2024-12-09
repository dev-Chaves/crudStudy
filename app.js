const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

require('dotenv').config();


// Config 
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

//Conexão com o banco de dados
    const sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASSWORD, 
        {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });

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
        console.log('Rodando!');
        return res.render('formulario');
    });

    app.post('/add', (req, res) =>{
        res.send('Formulário Recebido!!!')
    });

    app.listen(port, (req,res) =>{
        console.log(`Rodando na porta ${port}`);
    });

    // app.get('/ola', (req,res)=>{
    //     res.sendFile(__dirname + '/html/index.html');
    //     console.log('Testando');
    // });