// add scripts

console.log("sanity check!");

exports.getStudentName = function(student) {
  return student.name;
};

exports.getTotalLetters = function(arr) {
  total = 0;
  arr.forEach(function(str) {
    total += str.length;
  });
  return total;
};

exports.createObject = function(key, value) {
  var object = {};
  object[key] = value;
  return object;
};

exports.getNegativeIndex = function(arr, characterFromEnd) {
  var reversedArr = arr.reverse();
  var postiveIndex = (characterFromEnd*-1) - 1;
  return reversedArr[postiveIndex];
};

