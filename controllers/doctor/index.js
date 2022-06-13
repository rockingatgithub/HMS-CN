const Appointment = require("../../models/appointment");
const Doctor = require("../../models/doctor");

module.exports.doctorSignup = async (req, res) => {

    // console.log(req.body);

    let doctor = await Doctor.create(req.body);

    return res.json({
        message: "Doctor successfully created!",
        data: doctor.email
    });


}


module.exports.doctorLogin = async (req, res) => {

    console.log(req.body);

    if(req.body?.email){
        let isEmailPresent = await Doctor.findOne({ email: req.body.email })

        if(isEmailPresent){
            if(isEmailPresent.password === req.body.password){

                // return res.json({
                //     message: "Doctor successfully loggedIn!",
                //     doctor: isEmailPresent
                // })

                return res.redirect(`/doctor/profile/${isEmailPresent._id}`)

            }

            return res.send('User password is incorrect');

        }

        return res.send('User email is incorrect');


    }


}


module.exports.doctorProfile = async (req, res) => {


    console.log(req.params.userId);

    let doctor = await Doctor.findById(req.params.userId);

    let appointments = await Appointment.find({ doctor: req.params.userId  }).populate('patient');

    // console.log(appointments);

    res.cookie('userID', doctor._id);


    return res.render('profile.ejs', {

        user: doctor,
        userType: 'doctor',
        appointments

    })

}
