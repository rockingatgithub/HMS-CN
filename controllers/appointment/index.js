const Appointment = require("../../models/appointment");

module.exports.bookAppointment = async (req, res) => {

    console.log(req.body);

    let appointment = await Appointment.create(req.body);

    return res.json({
        message: "Appointment booked successfully!",
        appointment
    })

}


module.exports.getAppointment = async (req, res) => {

    console.log(req.params);

    let appointment = await Appointment.findById(req.params.apId).populate('doctor').populate('patient')

    return res.json({
        message: "Appointment booked successfully!",
        appointment
    })

}

module.exports.changeAppointment = async (req, res) => {

    console.log(req.params, req.query);

    let appointment = await Appointment.findOneAndUpdate({ _id : req.params.apId}, {  status: req.query.status  }).populate('doctor').populate('patient')

    return res.json({
        message: "Appointment changed successfully!",
        appointment
    })


}