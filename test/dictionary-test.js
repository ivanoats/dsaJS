/*jshint expr: true*/
'use strict';

var rootPath = require('app-root-path');
var expect   = require('chai').expect;
var Dictionary = require(rootPath + '/lib/Dictionary');

describe('Dictionary', function() {

  var englishToSpanish;

  beforeEach(function() {
    englishToSpanish = new Dictionary();
    englishToSpanish.add('today', 'hoy');
  });

  it('can add words', function() {
    expect(englishToSpanish.count()).to.equal(1);
    englishToSpanish.add('tomorrow', 'mañana');
    expect(englishToSpanish.count()).to.equal(2);
  });

  it('can find a word',function(){
    expect(englishToSpanish.find('today')).to.equal('hoy');
  });
});

