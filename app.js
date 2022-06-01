const express = require('express'); 
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4050

require("./server/model/appModel")
// const Comment = require('./server/model/Comment');
// const Menus = require('./server/model/Menu');
// const Orders = require('./server/model/Order');


//static files
app.use(cors())
app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.urlencoded({extended:true}));

//setting Templating engine
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


const route = require('./server/routes/pageRoutes')
const menu = require('./server/routes/menuRoutes')
const order = require('./server/routes/orderRoutes')
const comment = require('./server/routes/commentRoutes')




//routes
app.use('/', route); // main/home page
app.use('/', menu);
app.use('/', order);
app.use('/', comment);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})