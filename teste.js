// const sequelize = require('sequelize');

// sequelize.authenticate().then(function(){
//    console.log('Conectado com Sucesso!') 
// }).catch(function(erro){
//     console.log(`Falha ao se conectar : Erro = ${erro}`);
// });

// // Model, forma de gerar uma tabela/criar diretamente pelo node/sequelize

// // Postagem de Blogs

// const postagem = sequelize.define('postagens', {
//         titulo: {
//                 type: Sequelize.STRING

//         },
//         conteudo:{
//                 type: Sequelize.TEXT
//         } 
// });

// // postagem.create({
// //         titulo: "Eu sou foda",
// //         conteudo: 'qualquer',
// // });

// // postagem.sync({force:true});

// const usuario = sequelize.define('usuarios',{
//         nome: {
//                 type: Sequelize.STRING
//         },
//         idade:{
//                 type: Sequelize.INTEGER
//         },
//         email:{
//                 type: Sequelize.STRING
//         }
// });

// // usuario.sync({force:true});