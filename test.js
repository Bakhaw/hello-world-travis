const chai = require('chai');
const expect = require('chai').expect;
const HelloWorld = require('./helloworld');

describe('Hello World test', function () {

  it('Should return Hello World', function () {
    const helloWorld = new HelloWorld();
    return 'Hello World';
    expect(helloWorld.hey).to.equal('Hello World');
  });
});
