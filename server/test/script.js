var assert = require('assert')
const app = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')

const should = chai.should()

chai.use(chaiHttp)

describe('testing', () => {
    it('courses should be fetched', () =>{
        chai.request(app)
        .get('/courses')
        .end((err, res) => {
            assert.equal(res.status, 200)
            res.body.length.should.be.greaterThan(0)
        })
    })
    it('quiz', () => {
        chai.request(app)
        .get('/quiz')
        .end((err, res) => {
            assert.equal(res.status, 200)
            res.body.length.should.be.greaterThan(0)
        })
    })
})