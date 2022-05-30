const Admin = require("../../models/admin");

module.exports.adminSignup = async  (req, res) => {

    console.log(req.body);

    let admin = await Admin.create(req.body);

    return res.send(`${admin.email}`);

    // let admin   =  Admin.create()
    

}

module.exports.adminLogin = async (req, res) => {

    console.log(req.body);

    if(req.body?.email){
        let isEmailPresent = await Admin.findOne({ email: req.body.email })

        if(isEmailPresent){
            if(isEmailPresent.password === req.body.password){

                return res.json({
                    message: "Admin successfully loggedIn!",
                    admin: isEmailPresent
                })

            }

            return res.send('User password is incorrect');

        }

        return res.send('User email is incorrect');


    }


}