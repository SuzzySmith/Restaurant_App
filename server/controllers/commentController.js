const router = require('express').Router();
const Comment = require('../model/comment');


exports.create = async (req, res) => {
    
    const new_comments = new comment({
        name: req.body.name,
        recommend: req.body.recommend,
        email: req.body.email,
        comment: req.body.comment
    });
        await new_comments.save();
        // res.json(savedComment);
        const comments = await Comment.find({});
        res.render('pages/about',  {title: "About us", comments : comments})

};

 
exports.edit = async (req, res) => {
    let id = req.params.comment_id 

    const comment = await Comment.findById(id);
    res.render('comment/edit', {title: "Edit Comments", comment : comment })

}

exports.update = async (req, res) => {
    let id = req.params.comment_id 

  const comments = await Comment.updateOne({_id: id},
    {name:req.body.name,
    email:req.body.email,
    comment:req.body.comment})

        res.redirect('/about' );
         
    }


    exports.confirm = async (req, res) => {
        let id = req.params.comment_id 

        const comment = await Comment.findById(id);
    //   console.log(menu)        
        res.render('comment/delete', {title: "Delete comment" , comment})
        
    }


    exports.delete = async (req, res) => {
        let id = req.params.comment_id 

    const comment = await Comment.deleteOne({_id: id},
      
      {name:req.body.name,
        price:req.body.price,
        status:req.body.status,
        remarks:req.body.remarks});     
        res.render('comment/delete', {title: "Delete comment" , comment})
        
    };

    
