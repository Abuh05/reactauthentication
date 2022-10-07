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
    //email and password match

    UserModel.findOne({email: req.body.email }).then(result => {
        console.log(result, '11')

        //match password with req.body.password
        if(result.password !== req.body.password) {
            res.send({ code: 404, message: 'Wrong Password'})
        }else{
            res.send({ code: 200, message: "user Found", token: 'hhhhhh'})
        }
    }).catch(err => {
        res.send({ code: 500, message: "user not found"})
    })
}