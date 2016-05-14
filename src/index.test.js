var expect = require('chai').expect;
var hmNames = require('./index');


describe('Hindu Names', function() {
	
	it('should return a name when random name is asked', function() {
		
		var name = hmNames.random();
		expect(name).to.be.a('string');
		// expect(true).to.be.true;
	});

	it('should return a array when all names are requested', function() {
		
		expect(hmNames.all).to.be.a('array');

	});

	it('should return a name from existing names', function() {
	
		var name = hmNames.random();
		expect(hmNames.all).to.include(name);

	});
});