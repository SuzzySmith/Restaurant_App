const Menu = require('../model/Menu');
const Order = require('../model/Order');


exports.index = async (req, res) => {
    
    const orders = await Order.find({}).populate('menu'); 
    // console.log(orders)
    res.render('order/index', {title: "Orders" , orders})
     
}

exports.add = async (req, res) => {
    let id = req.params.menu_id
    const menus = await Menu.findById(id); 

    res.render('order/add', {title: "Add Orders", menus})
     
}

exports.save = async (req, res) => {
    const menu_id =req.params.menu_id
    const menu = await Menu.findById(menu_id)
      const orders = new Order ({
    
        client:req.body.client,
        menu : menu_id,
        cost : menu.price,
        order_date: Date.now(), 
        paid : 0,
        status : 0,
      }) 
       await orders.save()
    res.render('order/add', {title: "Add Orders", })
     
}

exports.edit = async (req, res) => {

    const menus = await Menu.find({})
    let id = req.params.id
    const order = await Order.findById(id);
// console.log(menus)
    res.render('order/edit', {title: "Edit orders" ,menus, order})
    
}

exports.update = async (req, res) => {
    const menu = await Menu.findById(req.body.menu)

    const editedOrder = {
  
    client:req.body.client,
    menu : req.body.menu,
    order_date : Date(),
    cost : menu.price,
    paid : 0,
    status : 0
  }

    // let id = req.params.id 

    const order = await Order.updateOne({_id: req.params.id}, editedOrder) ;    
// console.log(req.body)

    res.redirect(302, '/orders', order)
     
}

exports.confirm = async (req, res) => {
    let id = req.params.order_id

    const order = await Order.findById(id);
//   console.log(menu)        
    res.render('order/delete', {title: "Delete order" , order})
    
}

exports.delete = async (req, res) => {
    let id = req.params.menu_id 

const order = await Order.deleteOne({_id: id},
  
    {
  
        client:req.body.client,
    menu : req.body.menu,
    order_date : Date(),
    cost : menu.price,
    paid : 0,
    status : 0
      }) ;       
    res.render('order/delete', {title: "Delete order" , order})
    
};

