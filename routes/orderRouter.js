const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Orders = require('../models/Orders.js')


router.get('/orders' , async(req,res) => {
    try{
        const orders = await Orders.find()
        res.json(orders)

    }catch(err){
         res.status(500).json({message:err.message})
    }
})

router.get("/orders/:id", async(req,res)=>{
    try{
        const order = await Orders.findById(req.params.id)

        if(!order){
            return res.status(404).json({message:'not found'})
        }
        res.json(order)

    }catch(err){
            res.status(500).json({message:err.message})

    }
})

module.exports = router