const express = require('express');
const controller = require('../controllers/commentController')

// const router = express.router();   
const router = require('express').Router();






// router.get('/about', controller.index);

router.post('/comment', controller.create);



router.get('/edit/:comment_id', controller.edit);

router.post('/edit/:comment_id', controller.update);



router.get('/delete/:comment_id', controller.confirm);

router.post('/delete/:comment_id', controller.delete);




module.exports =   router;