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
    console.log('A tabela postagens foi criada com sucesso! ');
}).catch((err)=>{
    console.log(`Erro ao criar tabela: ERRO:${err}`)
});

export {Post};