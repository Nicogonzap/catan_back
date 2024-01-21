import express from 'express'
const app = express ()

//JSON
app.use (express.json())
app.use(express.urlencoded({extended:false}));


import mainRouter from './routes/mainRouter.js'

import adminRouter from './routes/adminRouter.js'

const PORT = 3000;


app.listen (PORT, () => {
    console.log (`Server running on port ${PORT}`)
})

import { sequelize } from './database/database.js'
import {Tournaments} from './database/models/Tournaments.js'
import {Events} from './database/models/Events.js'
import {Roles} from './database/models/Roles.js'
import {Players} from './database/models/Players.js'
import {Games} from './database/models/Games.js'

app.use('/', mainRouter)
app.use('/admin', adminRouter)


/*Code to test Sequalize connection and creation of required tables
async function main () {
    try {
        await sequelize.sync({force:true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
main()
*/



