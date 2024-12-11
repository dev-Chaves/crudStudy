// DOTENV CONFIG
import dotenv from 'dotenv';

dotenv.config()
//

import { DataTypes } from 'sequelize';
import { Sequelize, sequelize } from './db.js';

const Post = sequelize.define('postagens',{
    titulo:{
        type: DataTypes.STRING
    },
    conteudo:{
        type: DataTypes.STRING
    }

});

sequelize.authenticate().then(()=>{
    console.log('Conexão estabelicida com o banco de dados!');
}).catch((err)=>{
    console.log(`Erro: ${err}`);
});

Post.sync({force:false}).then(()=>{
    console.log('A postagens foi criada com sucesso! ');
}).catch((err)=>{
    console.log(`Erro ao criar tabela: ERRO:${err}`)
});

export {Post};

//teste ded variáveis de ambiete
// console.log({
//     DB_NAME: process.env.DB_NAME,
//     DB_USER: process.env.DB_USER,
//     DB_PASSWORD: process.env.DB_PASSWORD,
//     DB_HOST: process.env.DB_HOST,
//     DB_DIALECT: process.env.DB_DIALECT,
// });