const mongoose = require('mongoose');



const appointmentSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },

    status : {
        type: String,
        enum: ['accepted', 'rejected', 'pending']
    }

}, {
    timestamps: true
});


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;