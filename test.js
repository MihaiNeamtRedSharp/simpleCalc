//test.js

const server = require('./server.js');

const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Add Endpoint', () => {

    it('GET /add should add all parameters', async () => {
      const res = await requestWithSupertest.get('/add?array=20,2,5');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('sum');
        expect((res) => {
            assert.equal(res.body.sum, 27, '');
          });
    });
  
  });

  describe('Sub Endpoints', () => {

    it('GET /sub should add all parameters', async () => {
      const res = await requestWithSupertest.get('/sub?array=20,2,5');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('diff');
        expect((res) => {
            assert.equal(res.body.diff, 13, '');
          });
    });
  
  });

  describe('Div Endpoint', () => {

    it('GET /mul should add all parameters', async () => {
      const res = await requestWithSupertest.get('/mul?array=20,2,5');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('prod');
        expect((res) => {
            assert.equal(res.body.prod, 200, '');
          });
    });
  
  });

  describe('Div Endpoint', () => {

    it('GET /div should add all parameters', async () => {
      const res = await requestWithSupertest.get('/div?array=20,2,5');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('quot');
        expect((res) => {
            assert.equal(res.body.quot, 2, '');
          });
    });
  
  });