const express = require('express')
const mongoose = require('mongoose')

const userModel = require("./models/User")
const app=express()
app.use(express.json())
require('dotenv').config({path:'config/.env'})
mongoose.connect(process.env.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true ,useCreateIndex: true},(err)=>{
    if (err)
    throw err;
    console.log('Data base connected ...')

})
app.use('/api',require('./routers/user'))
app.listen(5000,()=>{
   console.log('connected...')
})