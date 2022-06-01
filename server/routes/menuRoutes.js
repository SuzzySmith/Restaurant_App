const express = require('express');
const controller = require('../controllers/menuController')

// const router = express.router();   
const router = require('express').Router();


router.get('/menu', controller.index);


// creating a menu

router.get('/menus/add', controller.add);

router.post('/menus/add', controller.save);

//editing menu

router.get('/menus/edit/:menu_id', controller.edit);

router.post('/menus/edit/:menu_id', controller.update);
 
//deleting a menu

router.get('/menus/delete/:menu_id', controller.confirm);

router.post('/menus/delete/:menu_id', controller.delete);


module.exports =   router