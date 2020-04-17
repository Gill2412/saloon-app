const mongoose = require('mongoose')
// const validator = require('validator')

const appointmentSchema = mongoose.Schema({
    day :{
        type: String,
        require: true
    },
    client: {
        type: String,
        require: true
    },
    time:{
        type: String,
        require: true
    }
    // sec_n: '2', Client: 'hamayun', Time: '12:50'
})

const Appointment = mongoose.model('Appointment', appointmentSchema )
module.exports  = Appointment