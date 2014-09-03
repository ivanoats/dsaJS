'use strict';

var expect = require('chai').expect;
var Queue = require('../lib/queue');

describe('Queue', function() {

  var q;

  beforeEach(function() {
    q = new Queue();
  });

  it('can instantiate a new queue', function() {
    expect(q).to.be.an.instanceof(Queue);
  });

  it('has a property called dataStore', function () {
    expect(q).to.have.property('dataStore');
  });
});

