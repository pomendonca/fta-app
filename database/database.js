const Sequilize = require("sequelize")

const connection = new Sequilize('guiaperguntas', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection