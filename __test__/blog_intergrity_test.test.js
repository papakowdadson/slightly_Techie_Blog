// Import necessary libraries
const chai = require('chai');
const chaiImmutable = require('chai-immutable');
const request = require('supertest');
const app = require('../index'); // Your Express app

chai.use(chaiImmutable);
const { expect } = chai;

describe('POST /blog/create/', () => {
    it('creates a new blog', (done) => {
        request(app)
            .post('/blog/create/')
            .send({ image: 'testImage', title: 'testTitle', content: 'testContent', author: 'testAuthor' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                console.log('======res======',res)
                if (err) return done(err);
                expect(res.body.message).to.equal("Blog created");
                done();
            });
    });
});