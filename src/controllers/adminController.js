//Import databases needed

import {Tournaments} from '../database/models/Tournaments.js'
import {Events} from '../database/models/Events.js'
import {Roles} from '../database/models/Roles.js'
import {Players} from '../database/models/Players.js'
import {Games} from '../database/models/Games.js'


const adminController = {
    playerDelete: (req, res) => {
        //Function sets a player as Inactive
        let playerToUpdate = {
            id:req.body.id //This assumes that the id will be passed, otherwise this will need to lookup a different parameter
        }
        Players.update (playerToUpdate,{
            where:{id:playerToUpdate.id}
        })
    }
}

export default adminController