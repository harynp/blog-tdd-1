const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const app = require('../app.js')

chai.use(chaiHttp)

const user = {
  username: 'hary',
  password: 'hary'
}

describe('REGISTER USER', function () {
  it('form buat register', function (done){
    chai.request(app)
    .post('/users/register')
    .send(user)
    .end(function (err, res) {
      res.status.should.equal(200)
      res.body.should.be.an('Object')
      done()
    })
  })
})

describe('LOGIN USER', function () {
  it('form buat login', function (done){
    chai.request(app)
    .post('/users/login')
    .send(user)
    .end(function (err, res) {
      res.status.should.equal(200)
      res.body.should.be.an('Object')
      done()
    })
  })
})
