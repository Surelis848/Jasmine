describe('My fizzbuzz function', function(){
    beforeEach(function(){
        fizzbuzz = new fizzBuzz();
    });
    describe('Returns number, fizzbuzz, fizz or buzz', function() {
        it('should exist', function() {
            expect(fizzBuzz).toBeDefined();
        });
        it('should return fizz when called as fizzBuzz(9)', function(){
            var result = fizzBuzz(9)
            expect(result).toBe('Fizz');
        });
        it('should return buzz when called as fizzBuzz(10)', function(){
            var result = fizzBuzz(10)
            expect(result).toBe('Buzz');
        });
        it('should return fizzbuzz when called as fizzBuzz(15)', function(){
            var result = fizzBuzz(15)
            expect(result).toBe('FizzBuzz');
        });
        it('should return 4 when called as fizzBuzz(4)', function(){
            var result = fizzBuzz(4)
            expect(result).toBe(4);
        });
    });
});