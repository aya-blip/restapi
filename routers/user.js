const express = require('express')
const userModel = require("../models/User")
const router = express.Router()
router.post('/user',(req,res)=>{
    const{firstname,lastname,email,password}=req.body
    const newUser= new userModel({
       firstname,
       lastname,
       email,
       password
    })
    newUser.save()
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})
router.get('/user',(req,res)=>{
    userModel.find()

.then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))

})
router.delete('/user/:id',(req,res)=>{
userModel.findByIdAndDelete(req.params.id)
.then(user=>res.status(200).json(user))
.catch(err=>res.status(400).json(err))
})
router.put('/user/:id',(req,res)=>{
    userModel.findByIdAndUpdate(req.params.id,req.body)
    .then(user=>res.status(200).json(user))
.catch(err=>res.status(400).json({errors:[{msg:err}]}))
})
module.exports=router