const chai = require('chai');
const expect = require('chai').expect;
const HelloWorld = require('./helloworld');

describe('HelloWorld test', function() {
  
  it('Should return Hello World', function() {
    const helloWorld = new HelloWorld();
    
    expect(helloWorld.hey).to.equal('Hello World');
  });
})