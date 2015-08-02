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

exports.removeCharacter = function(str, charToRemove) {
 var strArr = str.split("");
 if (typeof charToRemove === 'number') {
  charToRemove = charToRemove.toString();
 }

 for (var i = 0; i < strArr.length; i++) {
   if (strArr[i] === charToRemove) {
    strArr.splice(i, 1);
   }
 }
 str = strArr.join("");
 return str;
};

exports.outputObject = function(obj) {
  var strArr = [];
  for(var i in obj) {
    strArr.push(i + " is " + obj[i]);
  }

  var results = strArr.join(", ");
  return results;
};
