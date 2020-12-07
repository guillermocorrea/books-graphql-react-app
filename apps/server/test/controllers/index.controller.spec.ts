import supertest, { SuperAgentTest } from 'supertest';
import { server } from '../../src/server';
import { expect } from 'chai';
import { Express } from 'express';

describe('/', () => {
  let request: SuperAgentTest;
  let app: Express;
  beforeEach(() => {
    app = server();
    request = supertest.agent(app);
  });

  it('should respond 200', async () => {
    const res = await request.get('/');
    expect(res.status).to.equal(200);
  });
});
