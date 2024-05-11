// Import necessary libraries
const chai  = require('chai');
const chaiImmutable =  require('chai-immutable');
const request = require('supertest');
const app = require('../index'); // Your Express app

chai.use(chaiImmutable);
const {expect} = chai;


describe('GET /blog/', () => {
    it('responds with "list of blogs!"', (done) => {
        request(app)
            .get('/blog/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});
