const express = require('express')
const bodyParser = require('body-parser')
const cc = require('./controller')
const massive = require('massive')
require('dotenv').config()
const app = express()

app.use(bodyParser.json())
app.use(express.static('/../public/build'))

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    dbInstance.seedFile()
    .then(res => console.log('seed succesful'))
    .catch(err => console.log('not succesful', err))
    app.set('db', dbInstance)
}).catch(err => console.log(err))

const port = 4000
app.listen(port, (() => {console.log('It workin')}))