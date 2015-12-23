var should = require('chai').should()
  , errors = require('../');

describe('errors', function() {
  describe('declined', function() {
    it('should throw error', function() {
      (function() {
        throw new errors.DeclinedError('declined');
      }).should.throw(errors.DeclinedError, /declined/);
    });

    it('should have correct status code', function() {
      new errors.DeclinedError().status.should.equal(423);
    });
  });

  describe('duplicate', function() {
    it('should throw error', function() {
      (function() {
        throw new errors.DuplicateError('duplicate');
      }).should.throw(errors.DuplicateError, /duplicate/);
    });

    it('should have correct status code', function() {
      new errors.DuplicateError().status.should.equal(422);
    });
  });

  describe('validation', function() {
    it('should throw error', function() {
      (function() {
        throw new errors.ValidationError('validation');
      }).should.throw(errors.ValidationError, /validation/);
    });

    it('should have correct status code', function() {
      new errors.ValidationError().status.should.equal(422);
    });
  });

  describe('unauthenticated', function() {
    it('should throw error', function() {
      (function() {
        throw new errors.UnauthenticatedError('unauthenticated');
      }).should.throw(errors.UnauthenticatedError, /unauthenticated/);
    });

    it('should have correct status code', function() {
      new errors.UnauthenticatedError().status.should.equal(401);
    });
  });

  describe('not found', function() {
    it('should throw error', function() {
      (function() {
        throw new errors.NotFoundError('not found');
      }).should.throw(errors.NotFoundError, /not found/);
    });

    it('should have correct status code', function() {
      new errors.NotFoundError().status.should.equal(404);
    });
  });

  describe('not authorized', function() {
    it('should throw error', function() {
      (function() {
        throw new errors.NotAuthorizedError('not authorized');
      }).should.throw(errors.NotAuthorizedError, /not authorized/);
    });

    it('should have correct status code', function() {
      new errors.NotAuthorizedError().status.should.equal(403);
    });
  });

});