var code = require('../js/main.js');

describe('Get Student Name', function() {
  it('should return the student name', function() {
    expect(code.getStudentName({name: 'Michael', age: 27 })).toBe("Michael");
  });
});

describe('Get Total Letters', function() {
  it('should return the total letters from array of strings', function() {
    expect(code.getTotalLetters(['javascript', 'is', 'not', 'python'])).toEqual(21);
  });
});

describe('Create Object', function() {
  it('should return an object from the arguments', function() {
    expect(code.createObject('city', 'Boulder')).toEqual({city: "Boulder"});
  });
});

describe('Get Negative Index', function() {
  it('should return the value of the index starting from the end', function() {
    expect(code.getNegativeIndex(['a', 'b', 'c', 'd', 'e'], -3)).toEqual("c");
  });
});

describe('Remove Character', function() {
  it('should remove the desired character if it exists', function() {
    expect(code.removeCharacter('javascript', 'a')).toEqual("jvscript");
    expect(code.removeCharacter('javascript', 1)).toEqual("javascript");
    expect(code.removeCharacter('12345', 2)).toEqual("1345");
  });
});

describe('Output Object', function() {
  it('should return object in a group of strings', function() {
    expect(code.outputObject({john: 10, jerry: 20, jenny: 30})).toEqual("john is 10, jerry is 20, jenny is 30");
  });
});

describe('Get Vowels', function() {
  it('should return vowels of a string to a new array', function() {
    expect(code.getVowels('javascripting')).toEqual(['a', 'i']);
  });
});

describe('Test Boolean Logic', function() {
  it('should return true if an array of booleans contains at least one true', function() {
    expect(code.testBooleanLogic([false, true, false, false])).toEqual(true);
    expect(code.testBooleanLogic([false, false, false])).toEqual(false);
  });
});

describe('Get Unique Values', function() {
  it('should return unique values from an array', function() {
    expect(code.getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])).toEqual(['m', 'n', 'r', 's']);
    expect(code.getUniqueValues(['michael', 'ben', 'kerry', 'ben'])).toEqual(['michael', 'ben', 'kerry']);
  });
});
