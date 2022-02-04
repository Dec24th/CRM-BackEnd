import express from 'express'
import bodyParser from 'body-parser'; //allows us to take in incoming POST req bodies

import usersRoutes from './routes/users.js'

const app = express(); //call the express as a function. our whole application lies in this variable
const PORT = 5000; 

app.use(bodyParser.json()) // we can initialize the bodyparser middleware - this states were using json data in our whole application.

app.use('/users', usersRoutes)

const name = 'ALLAN ACOSTA';

app.get('/', (req, res) => res.status(418).send(`HELLO, ${name} FROM THE HOME PAGE`))

app.listen(PORT, () =>
    console.log(`Server is Running on port: http://localhost:${PORT}`)
)
//above is the basic express server. Now what can we do with it.
//node and express are all about routing. so we nneed to create some routes which we can visit with our browser and we can send req to.

