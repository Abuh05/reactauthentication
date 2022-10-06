const UserModel = require('../models/user.js')


module.exports.signup = (req, res) => {
    console.log(req.body)
     const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password
     });
     newUser.save().then(() => {
        res.send({ code: 200, message: "Signup successful"})
    })
        .catch((err) => { res.send({  code: 500, message: "Signup Err" })
     })
}

module.exports.login = (req, res) => {
    console.log(req.body)

     newUser.save().then(() => {
        res.send({ code: 200, message: "Signup successful"})
    })
        .catch((err) => { res.send({  code: 500, message: "Signup Err" })
     })
}