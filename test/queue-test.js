'use strict';

var expect = require('chai').expect;
var Queue = require('../lib/queue');

describe('Queue', function() {

  it('can instantiate a new queue', function() {
    var q = new Queue();
    expect(q).to.be.an.instanceof(Queue);
  });

  it('has a property called dataStore', function () {
    var q = new Queue();
    expect(q).to.have.property('dataStore');
  });
});

