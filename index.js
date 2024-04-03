const express = require('express')
const mongoose = require('mongoose')
const { MONGO_CONFIG, EXPRESS_CONFIG } = require('./config')

const app = express()

mongoose
    .connect(MONGO_CONFIG.URI)        
    .then(() => console.log('Conectado'))
    .catch(() => console.log('No Conectado'))
app.listen(EXPRESS_CONFIG.PORT, () => console.log('Server listening to port', EXPRESS_CONFIG.PORT))