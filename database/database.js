const Sequilize = require("sequelize")

const connection = new Sequilize('guiaperguntas', 'root', '123214741p', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection