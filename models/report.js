const mongoose = require('mongoose');



const reportSchema = new mongoose.Schema({

    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    },

    status : {
        type: String,
        enum: ['positive', 'negative']
    }

}, {
    timestamps: true
});


const Report = mongoose.model('Report', reportSchema);

module.exports = Report;