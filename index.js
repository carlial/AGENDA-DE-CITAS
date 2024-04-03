const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose
    .connect('mongodb+srv://agenda-de-citasRollingCode:12345rollingcode@cluster0.5wch4gy.mongodb.net/agenda-de-citas?retryWrites=true&w=majority&appName=Cluster0')        
    .then(() => console.log('Conectado'))
    .catch(() => console.log('No Conectado'))
app.listen(6060, () => console.log('Server listening to port', 6060))