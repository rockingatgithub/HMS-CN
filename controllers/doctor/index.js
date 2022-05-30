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

                return res.json({
                    message: "Doctor successfully loggedIn!",
                    doctor: isEmailPresent
                })

            }

            return res.send('User password is incorrect');

        }

        return res.send('User email is incorrect');


    }


}
