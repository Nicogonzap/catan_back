import {sequelize} from '../database.js'
import {DataTypes} from 'sequelize'
import {Games} from './Games.js'

const data = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    event_date: {
        type: DataTypes.DATE
    },
    event_location: {
        type: DataTypes.STRING
    },
    /*
    tournament_id: {
        type: DataTypes.INTEGER
    }*/
    
};

const config = {
    tableName: 'events',
    //timestamps: false
};

export const Events = sequelize.define('Events',data, config);

Events.hasMany(Games,{
    foreignKey: 'event_id',
    sourceKey: 'id',

})

Games.belongsTo (Events,{
    foreignKey: 'event_id',
    targetId: 'id'
})