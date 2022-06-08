const Patient = require("../../models/patient");

module.exports.patientSignup = async (req, res) => {

    // console.log(req.body);

    let doctor = await Patient.create(req.body);

    return res.json({
        message: "Doctor successfully created!",
        data: doctor.email
    });


}


module.exports.patientLogin = async (req, res) => {

    console.log(req.body);

    if(req.body?.email){
        let isEmailPresent = await Patient.findOne({ email: req.body.email })

        if(isEmailPresent){
            if(isEmailPresent.password === req.body.password){

                // return res.json({
                //     message: "Doctor successfully loggedIn!",
                //     patient: isEmailPresent
                // })

                return res.redirect(`/patient/profile/${isEmailPresent._id}`)


            }

            return res.send('User password is incorrect');

        }

        return res.send('User email is incorrect');


    }


}


module.exports.patientProfile = async (req, res) => {


    console.log(req.params.userId);

    let patient = await Patient.findById(req.params.userId);


    return res.render('profile.ejs', {

        user: patient,
        userType: 'patient'

    })

}