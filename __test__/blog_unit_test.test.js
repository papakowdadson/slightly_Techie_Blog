// const { expect } = require('chai');
const sinon = require('sinon');
const { createBlog, getAllBlog, getSingleBlog, updateSingleBlog, deleteSingleBlog } = require('../controller/blog/blog_controller');
const db = require('../config/db_config');
const redisClient = require('../config/redis_config');

describe('Blog Controller', () => {
  let req, res, next, jsonSpy, statusStub, queryStub, setStub, expireStub;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = { json: () => {}, status: () => {} };
    jsonSpy = sinon.spy(res, 'json');
    statusStub = sinon.stub(res, 'status').returns(res);
    queryStub = sinon.stub(db, 'query');
    setStub = sinon.stub(redisClient, 'set');
    expireStub = sinon.stub(redisClient, 'expire');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('createBlog', () => {
    it('should create a blog successfully', async () => {
      req.body = { image: 'testImage', title: 'testTitle', content: 'testContent', author: 'testAuthor' };
      queryStub.yields(null, { insertId: 1 });

      await createBlog(req, res);

      sinon.assert.calledWith(queryStub, sinon.match.string, sinon.match.object);
      sinon.assert.calledWith(jsonSpy, { message: 'Blog created' });
      sinon.assert.calledWith(statusStub, 201);
    });

    it('should handle error during blog creation', async () => {
      req.body = { image: 'testImage', title: 'testTitle', content: 'testContent', author: 'testAuthor' };
      queryStub.yields(new Error('DB Error'));

      await createBlog(req, res);

      sinon.assert.calledWith(jsonSpy, { message: 'error occurred' });
      sinon.assert.calledWith(statusStub, 400);
    });
  });

  // Write similar tests for other functions (getAllBlog, getSingleBlog, updateSingleBlog, deleteSingleBlog)
});
