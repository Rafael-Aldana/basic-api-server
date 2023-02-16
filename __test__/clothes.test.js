'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { sequelizeDB } = require('../src/models/index');

beforeAll(async () => {
  await sequelizeDB.sync();
});

afterAll(async () => {
  await sequelizeDB.drop();
});

describe('server', () => {
  it('should create clothes', async () => {
    const response = await request.post('/api/clothes').send({
      name: 'T-shirt',
      description: 'T-shirt description',
      price: 1000,
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('T-shirt');
    expect(response.body.description).toEqual('T-shirt description');
    expect(response.body.price).toBeTruthy();
  });

  it('gets clothes', async () => {
    const response = await request.get('/api/clothes');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('T-shirt');
    expect(response.body[0].description).toEqual('T-shirt description');
    expect(response.body[0].price).toEqual(1000);
    expect(response.body[0].id).toBeTruthy();
  });

it('should get all clothes', async () => {
  const response = await request.get('/clothes');
 expect(response.status).toEqual(200);
 expect(response.body.status).toBeGreaterThanOrEqual(0);
});
it('should delete a clothing item', async () => {
  const response = await request.delete('/clothes/1');
  expect(response.status).toEqual(200);
});



});
