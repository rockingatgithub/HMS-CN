module.exports.logoutHandler = (req, res) => {

    if(req.cookies?.userID){

        res.clearCookie('userID');

        return res.redirect('/');

    }

    return res.redirect('/');

}