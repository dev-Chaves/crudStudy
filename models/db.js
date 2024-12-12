import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});



sequelize.authenticate().then(()=>{
    console.log('Conexão estabelicida com sucesso!');
}).catch((err)=>{
    console.log(`Erro: ${err}`);
});

export {Sequelize, sequelize}