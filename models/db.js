// DOTENV CONFIG
    import dotenv from "dotenv";

    dotenv.config();
//
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

export {Sequelize, sequelize}

sequelize.authenticate().then(()=>{
    console.log('Conexão estabelicida com sucesso!');
}).catch((err)=>{
    console.log(`Erro: ${err}`);
});

console.log('Configuração do banco de dados:', {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_DIALECT: process.env.DB_DIALECT
});