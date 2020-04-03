//conection via sequelize
const Sequelize = require('sequelize');

// instrutura de conexão ao bando arquivo local SQlite3

const sequelize = new Sequelize({
    
    dialect: 'sqlite',
    storage: './db/app.db'

});

module.exports = sequelize