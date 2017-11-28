const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  register: (req, res) => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(req.body.password, salt)
    let user = new User({
      username: req.body.username,
      password: hash,
      role: req.body.role
    })
    user.save((err, dataUser) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataUser)
      }
    })
  },
  login: (req, res) => {
    User.findOne({
      username: req.body.username
    }, (err, dataUser) => {
      if (err) {
        res.send(err)
      } else {
        if (dataUser === null) {
          res.send('USER BELOM TERDAFTAR')
        } else {
          var token = jwt.sign({
            id: dataUser._id,
            username: dataUser.username,
            role: dataUser.role
          }, process.env.SECRET_KEY);
          res.send(token)
        }
      }
    })
  }
}
