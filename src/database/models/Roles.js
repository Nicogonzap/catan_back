import {sequelize} from '../database.js'
import {DataTypes} from 'sequelize'
import {Players} from './Players.js'


const data = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    role_desc: {
        type: DataTypes.STRING
    },
};

const config = {
    tableName: 'roles',
    //timestamps: false
};
export const Roles = sequelize.define('Roles',data, config);
Roles.hasMany(Players,{
    foreignKey: 'player_role',
    sourceKey: 'id',

})

Players.belongsTo (Roles,{
    foreignKey: 'player_role',
    targetId: 'id'
})