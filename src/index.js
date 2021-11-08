

//--------------INPORT
const express = require('express')

const app = express()

const home_router = require('./routes/home')
const products_router = require('./routes/products')
const users_router = require('./routes/users')
const bodyparser = require('body-parser');



// ----------DOTENV
require('dotenv').config()
const host = process.env.HOST;
const port = process.env.PORT;


//---------MIDLEWARE


app.use(bodyparser.urlencoded({extended:false}))
app.use(home_router)
app.use(products_router)
app.use(users_router)

//----------------SERVER


app.listen (port, host , () =>{console.log(`${port}  ${host} server funcionando`)});












