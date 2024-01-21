import {sequelize} from '../database.js'
import {DataTypes} from 'sequelize'
import {Events} from './Events.js'


const data = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
};

const config = {
    tableName: 'tournaments',
    //timestamps: false
};
export const Tournaments = sequelize.define('Tournaments',data, config);

Tournaments.hasMany(Events, {
    foreignKey: 'tournament_id',
    sourceKey: 'id',
})
Events.belongsTo (Tournaments,{
    foreignKey: 'tournament_id',
    targetId: 'id'
})


    

