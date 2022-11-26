const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'gino',
    'gino',
    '322Izi322',
    {
        host: 'ovz1.georgii-dmt.wmekm.vps.myjino.ru',
        port: '49338',
        dialect: 'postgres'
    }
)