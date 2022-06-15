const Doctor = require("../models/doctor");

module.exports.authenticate = async  (req, res, next) => {

    console.log("<><>", req.cookies?.userID)

    if(req.cookies?.userID){

        let doctor = await Doctor.findById(req.cookies.userID);
        
        if(! doctor){

            return res.status(403).json({

                message: 'User not found!',
        
            });

        }


        next();

    } else{

        return res.status(403).json({

            message: 'User not found!',
    
        });

    }

}