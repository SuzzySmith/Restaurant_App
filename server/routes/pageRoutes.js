const express = require('express');
const controller = require('../controllers/pageController')

// const router = express.router();   
const router = require('express').Router();


router.get('/', controller.home);

router.get('/about', controller.about);

router.get('/contact', controller.contact);



module.exports =   router