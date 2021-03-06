import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../models/user';
import Helper from '../help/help';
import { testingData, invaldToken, text, testData } from '../help/mock'


const { expect } = chai;
chai.use(chaiHttp);

const newUser = testingData.newUser;
const validation = testingData.validationUser;
const wrongUser = testingData.wrongUser;
const notMacth = testingData.notMacthUser;

describe('test for database', () => {
  before('Clear data from database', (done) => {
    chai.request(server);
    models.execute('DELETE FROM users');
    done();
  });
  it('sign up validation', (done) => {
    chai
      .request(server)
      .post('/api/v1/signup')
      .set('accept', 'application/json')
      .send(validation)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.an('String');
        done();
      });
  });
  it('should return User created successfully', (done) => {
    chai
      .request(server)
      .post('/api/v1/signup')
      .set('accept', 'application/json')
      .send(newUser)
      .end((err, res) => { 
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('token');
        done();
      });
  });
  it('should return error if an email is already exist', (done) => {
    chai
      .request(server)
      .post('/api/v1/signup')
      .set('accept', 'application/json')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(409);
        expect(res.body.error).to.be.equal(`E-mail ${newUser.email} is alrady exist`);
        done();
      });
  });
  it('should return error if user is not exit', (done) => {
    chai
      .request(server)
      .post('/api/v1/login')
      .set('accept', 'application/json')
      .send(wrongUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.error).to.be.equal(`${wrongUser.userName} does not exist in our database`);
        done();
      });
  });
  it('should return User is successfully logged in', (done) => {
    chai
      .request(server)
      .post('/api/v1/login')
      .set('accept', 'application/json')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.equal('User is successfully logged in');
        expect(res.body.token).to.be.an('string');
        done();
      });
  });
  it('should return error if Email and password did not match', (done) => {
    chai
      .request(server)
      .post('/api/v1/login')
      .set('accept', 'application/json')
      .send(notMacth)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.equal('user_name and password do not match');
        done();
      });
  });
});

describe('Test for verifying Token', () => {
  it('should return error if Token is invalid', (done) => {
    chai
      .request(server)
      .get('/api/v1/getall')
      .set('token', invaldToken)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.equal('The token you provided is invalid');
        done();
      });
  });
  it('should return error if Token is invalid', (done) => {
    chai
      .request(server)
      .get('/api/v1/getall')
      .set('token', '')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.equal('Token is not provided');
        done();
      });
  });
  it('should return error if Token is invalid', (done) => {
    chai
      .request(server)
      .get('/api/v1/getall')
      .set('token', 'undifined')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error.name).to.be.equal('JsonWebTokenError');
        expect(res.body.error.message).to.be.equal('jwt malformed');
        done();
      });
  });
});

describe('Test for getall users', () => {
  it('should return all users', (done) => {
     models.execute(text, testData);
    const realToken = Helper.generateToken(1);
    chai
      .request(server)
      .get('/api/v1/getall')
      .set('token', realToken)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('Array');
        done();
      });
  });
  it('should return one user', (done) => {
    models.execute(text, testData);
    const realToken = Helper.generateToken(1);
    chai
      .request(server)
      .get('/api/v1/getall/1')
      .set('token', realToken)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('Array');
        done();
      });
  });
  it('should return one user', (done) => {
    models.execute(text, testData);
    const realToken = Helper.generateToken(1);
    chai
      .request(server)
      .get('/api/v1/getall/0')
      .set('token', realToken)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(404);
        expect(res.body.error).to.be.equal('user not found');
        done();
      });
  });
});