const express = require('express');
const controller = require('../controllers/ordersController')

// const router = express.router();   
const router = require('express').Router();


router.get('/orders', controller.index);

// adding an order
router.get('/orders/add/:menu_id', controller.add);

router.post('/orders/add/:menu_id', controller.save);


//editing an order
router.get('/orders/edit/:order_id', controller.edit);

router.post('/orders/edit/:order_id', controller.update);

//deleting an order
router.get('/orders/delete/:order_id', controller.confirm);

router.post('/orders/delete/:order_id', controller.delete);

module.exports =   router