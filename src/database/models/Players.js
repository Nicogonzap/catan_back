import {sequelize} from '../database.js'
import {DataTypes} from 'sequelize'
import {Games} from './Games.js'


const data = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    player_Isactive: {
        type: DataTypes.INTEGER
    },
    player_Isregular: {
        type: DataTypes.INTEGER
    },
    
};

const config = {
    tableName: 'players',
    //timestamps: false
};

export const Players = sequelize.define('Players',data, config);

//Creation of player slot 1 in table Games
Players.hasMany(Games,{
    foreignKey: 'player1',
    sourceKey: 'id',
});
Games.belongsTo (Players,{
    foreignKey: 'player1',
    targetId: 'id'
})
//Creation of player slot 2 in table Games
Players.hasMany(Games,{
    foreignKey: 'player2',
    sourceKey: 'id',
});
Games.belongsTo (Players,{
    foreignKey: 'player2',
    targetId: 'id'
})
//Creation of player slot 3 in table Games
Players.hasMany(Games,{
    foreignKey: 'player3',
    sourceKey: 'id',
});
Games.belongsTo (Players,{
    foreignKey: 'player3',
    targetId: 'id'
})
//Creation of player slot 4 in table Games
Players.hasMany(Games,{
    foreignKey: 'player4',
    sourceKey: 'id',
});
Games.belongsTo (Players,{
    foreignKey: 'player4',
    targetId: 'id'
})
//Creation of player slot 5 in table Games
Players.hasMany(Games,{
    foreignKey: 'player5',
    sourceKey: 'id',
});
Games.belongsTo (Players,{
    foreignKey: 'player5',
    targetId: 'id'
})
//Creation of player slot 6 in table Games
Players.hasMany(Games,{
    foreignKey: 'player6',
    sourceKey: 'id',
});
Games.belongsTo (Players,{
    foreignKey: 'player6',
    targetId: 'id'
})
   