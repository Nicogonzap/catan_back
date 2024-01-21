//Import databases needed

import {Tournaments} from '../database/models/Tournaments.js'
import {Events} from '../database/models/Events.js'
import {Roles} from '../database/models/Roles.js'
import {Players} from '../database/models/Players.js'
import {Games} from '../database/models/Games.js'


const mainController = {
    listPlayers: (req, res) => {
        //Lists all the active players and returns the full db
            Players.findAll({
                where: {
                    player_Isactive: 1
                }
            })
            .then(players => {
                return res.json({
                    count: players.length,
                    data: Array.from(players)
                })
            })

    }
}

export default mainController