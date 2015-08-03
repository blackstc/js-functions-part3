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

exports.getVowels = function(str) {
  var strArr = str.split("");
  var vowelArr = ["a", "e", "i", "o", "u"];
  var results = [];

  for (var i = 0; i < vowelArr.length; i++) {
    for (var j = 0; j < strArr.length; j++) {
      if (vowelArr[i] === strArr[j]) {
        results.push(vowelArr[i]);
        break;
      }
    }
  }
  return results;
};

exports.testBooleanLogic = function(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      counter++;
    }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
};

exports.getUniqueValues = function(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (results.indexOf(current) < 0) {
      results.push(current);
    }
  }
  return results;
};
