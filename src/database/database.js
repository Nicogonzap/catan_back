import Sequelize from 'sequelize'


export const sequelize = new Sequelize (
    /*Database*/ "catandb",
    /*Host*/ "root",
    /*Password*/ null,
    {
        host:"127.0.0.1",
        dialect: "mysql",
    })

   