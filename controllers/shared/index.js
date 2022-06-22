module.exports.githubAuth = (req, res) => {
    return res.redirect('/doctor/profile/' + req.user._id);
  }