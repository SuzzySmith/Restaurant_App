require("dotenv").config();
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECTION3, {})

const db = mongoose.connection

db.once('open', () => {
    console.log('Connected to the database')
})

