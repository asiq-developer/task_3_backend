const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const orderRouter = require('./routes/orderRouter.js')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/new-db").then(()=>console.log('connected')).catch(()=>console.log('not connected'))

app.use('/api',orderRouter)

app.listen(5000 , ()=> {
    console.log('port is 5000')
})