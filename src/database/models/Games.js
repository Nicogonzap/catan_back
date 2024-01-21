import {sequelize} from '../database.js'
import {DataTypes} from 'sequelize'


    const data = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        /* Column for Event Id Will be created from the table Events
        event_id: {
            type:DataTypes.INTEGER
        },*/
        /* Columns for players will be created from the table Players as Foreign Keys
        player1: {
            type:DataTypes.INTEGER
        },
        player2: {
            type:DataTypes.INTEGER
        },
        player3: {
            type:DataTypes.INTEGER
        },
        player4: {
            type:DataTypes.INTEGER
        },
        player5: {
            type:DataTypes.INTEGER
        },
        player6: {
            type:DataTypes.INTEGER
        },*/
    };

    const config = {
        tableName: 'games',
        //timestamps: false
    };

    export const Games = sequelize.define('Games',data, config);
