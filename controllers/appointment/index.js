const Appointment = require("../../models/appointment");

module.exports.bookAppointment = async (req, res) => {

    console.log(req.body);

    let appointment = await Appointment.create(req.body);

    return res.json({
        message: "Appointment booked successfully!",
        appointment
    })

}