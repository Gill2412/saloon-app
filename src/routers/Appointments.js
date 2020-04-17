const express = require('express')
const router = new express.Router()
const Appointment = require('../models/appointments')

//add appointment
router.post('/appointment', async(req, res)=>{

    try{
        let appointment = new Appointment({
            ...req.body
        })
        await appointment.save()
        res.status(200).send({msg : 'Added Successfully', appointment})
    }catch(e){
        res.status(400).send(e)
    }

})

//get appointment
router.get('/appointment', async(req, res)=>{

    try{
        const appointments = await Appointment.find()
        res.status(200).send(appointments)
    }catch(e){
        res.status(400).send(e)
    }
})

//delete appointment
router.post('/appointment/:id', async(req, res)=>{
    try{
        await Appointment.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: 'Deleted Successfully'})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router