const Blog = require('../models/blogModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  create: (req, res) => {
      let newBlog = new Blog({
        title: req.body.title,
        content: req.body.content
      })
      newBlog.save((err, data) => {
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
  },
  all: (req, res) => {
    Blog.find((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    }).populate('author')
  },
  findById: (req, res) => {
    Blog.findById({
      _id: req.params.id
    }, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  update: (req, res) => {
    Blog.findOneAndUpdate({
      _id: ObjectId(req.params.id)
    }, {
      title: req.body.title,
      content: req.body.content,
    }, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  remove: (req, res) => {
    Blog.remove({
      _id: req.params.id
    }, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  }
}
