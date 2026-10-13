const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../app');

describe('Express application', function () {
  it('GET / should respond with status 200', async function () {
    const response = await request(app).get('/');

    assert.equal(response.status, 200);
  });
});