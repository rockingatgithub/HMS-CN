const Report = require("../../models/report");

module.exports.createReport = async ( req, res ) => {


    console.log(req.params.apId, req.query.status);

    let report = await Report.create({
        appointment: req.params.apId,
        status: req.query.status,
    })

    return res.redirect('back');

} 