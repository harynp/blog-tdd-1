const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const app = require('../app.js')

const newBlog = {
  _id: '123456',
  title: 'HACKTIV8',
  content: 'Menjadi Developer 12 Minggu',
  author: 'Secret'
}

let id = ''

chai.use(chaiHttp)


describe('GET ALL BLOG', function() {
  it('routing GET: /blog', function(done) {
    chai.request(app)
    .get('/blog')
    .send(newBlog)
    .end(function (err, res) {
      res.status.should.equal(200)
      done()
    })
  })
})

describe('POST BLOG', function () {
  it('routing POST: /blog', function(done) {
    chai.request(app)
    .post('/blog')
    .send(newBlog)
    .end(function (err, res) {
      res.status.should.equal(200)
      done()
    })
  })
})


describe('GET BLOG BY ID', function() {
  it('routing GET: blog/:id', function(done) {
    chai.request(app)
    .post('/blog')
    .send(newBlog)
    .end(function (err, res) {
      chai.request(app)
      .get(`/blog/123456`)
      .end(function (err, res) {
        res.status.should.equal(200)
        done()
      })
    })
  })
})

describe('UPDATE BLOG', function() {
  it('routing PUT: blog/:id', function(done) {
    chai.request(app)
    .post('/blog')
    .send(newBlog)
    .end(function (err, res) {
      chai.request(app)
      .put(`/blog/${res.body._id}`)
      .end(function (err, res) {
        res.status.should.equal(200)
        res.should.be.json
        done()
      })
    })
  })
})

describe('DELETE BLOG', function() {
  it('routing DELETE: blog/:id', function(done) {
    chai.request(app)
    .post('/blog')
    .send(newBlog)
    .end(function (err, res) {
      chai.request(app)
      .delete(`/blog/${res.body._id}`)
      .end(function (err, res) {
        res.status.should.equal(200)
        done()
      })
    })
  })
})
