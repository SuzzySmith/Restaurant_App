
const Menu = require('../model/Menu');



exports.index = async (req, res) => {
    const menus = await Menu.find({});   
    res.render('menu/index', {title: "Menu" , menus})
    // console.log(menus)
}

// adding menu
exports.add = async (req, res) => {

    res.render('menu/add', {title: "Menu" })
     
}


exports.save = async (req, res) => {

    const menu = new Menu ({
        name: req.body.name,
        price: req.body.price,
        status: req.body.status,
        remarks: req.body.remarks
    })
    
    await menu.save()
    console.log(req.body)
    
    res.render('menu/add', {title: "Add Menu" })
     
}

exports.edit = async (req, res) => {
    let id = req.params.menu_id 
 console.log(id)
    const menu = await Menu.findById(id);

    res.render('menu/edit', {title: "Edit Menu", menu })

}

exports.update = async (req, res) => {
    let id = req.params.menu_id 

  const menu = await Menu.updateOne({_id: id},
    {name:req.body.name,
    price:req.body.price,
    status:req.body.status,
    remarks:req.body.remarks})

        res.redirect('/menu' );
         
    }


    exports.confirm = async (req, res) => {
        let id = req.params.menu_id 

        const menu = await Menu.findById(id);
    //   console.log(menu)        
        res.render('menu/delete', {title: "Delete menu" , menu})
        
    }


    exports.delete = async (req, res) => {
        let id = req.params.menu_id 

    const menu = await Menu.deleteOne({_id: id},
      
      {name:req.body.name,
        price:req.body.price,
        status:req.body.status,
        remarks:req.body.remarks});     
        res.render('menu/delete', {title: "Delete menu" , menu})
        
    };

    