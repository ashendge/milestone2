var expect = require('chai').expect;
var sample = require("../app/sample");

describe('Sample Math Library', function() {
	describe('Basic addition', function() {
		it('Returns a positive number', function(done) {
			var answerPos = sample.addNumbers(34,45,56,67);
			expect(answerPos).to.equal(202);
			done();
		});

		it('Returns a negative number', function(done) {
			var answerNeg = sample.addNumbers(-3, -4, 4, -7);
			expect(answerNeg).to.equal(-10);
			done();
		});

		it('Returns an undefined value', function(done) {
			var undef = sample.addNumbers(-3, "GarbageString", 4, "Random");
			expect(undef).to.equal(undefined);
			done();
		});
	});

	describe('Basic division', function(){
		it('Returns a number for normal arguments', function(done){
			var answerDiv = sample.divideNumbers(20,10);
			expect(answerDiv).to.equal(2);
			done();
		});

		it('Returns undefined when only one argument is passed', function(done) {
			var answerDiv = sample.divideNumbers(30);
			expect(answerDiv).to.equal(undefined);
			done();
		});

		it('Returns 0 if more than 2 arguments are passed', function(done) {
			var answerDiv = sample.divideNumbers(40, 20, 2);
			expect(answerDiv).to.equal(0);
			done();
		});
	});

	describe('Basic comparison', function(){
		it('Returns -1 when left > right', function(done){
			var answerComp = sample.compareNumbers(20, 10);
			expect(answerComp).to.equal(-1);
			done();
			
		});

		it ('Returns 1 when right > left', function(done){
			var answerComp = sample.compareNumbers(10, 20);
			expect(answerComp).to.equal(1);
			done();
		});

		it('Returns 0 when left == right', function(done) {
			var answerComp = sample.compareNumbers(38, 38);
			expect(answerComp).to.equal(0);
			done();
		});

		it('Returns 2 when excess arguments are passed', function(done) {
			var answerComp = sample.compareNumbers(34,35,33);
			expect(answerComp).to.equal(2);
			done();
		});

	});
});
