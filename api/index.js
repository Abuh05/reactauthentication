const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const userController = require("./controllers/user.js")
var app = express()

const port = 5000
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/test', (err, success) => {
    if(err){
        console.log("Connection err")
    }else {
        console.log("DB connected")
    }
});


app.post('/signup', userController.signup )
app.post('/login', userController.login )

app.listen(port, () => {
    console.log(`Backend running on port : ${port}`)
})

