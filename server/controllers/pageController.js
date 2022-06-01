const comment = require('../model/comment');

exports.home = async (req, res) => {
    res.render('pages/index', {title: "Home"})
     
}


exports.about = async (req, res) => {
   
    const comments = await comment.find({});
    res.render('pages/about',  {title: "About us", comments : comments})
     
}


exports.contact = async (req, res) => {
    res.render('pages/contact',  {title: "Contact us", })
     
}