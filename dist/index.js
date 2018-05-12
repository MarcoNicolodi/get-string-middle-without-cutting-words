"use strict";

var getNearestSpace = function getNearestSpace(string, startingIndex) {
  console.log("oiiii");
  var stringArray = string;
  var predicate = function predicate(subStr, index) {
    return subStr === " " ? index : undefined;
  };

  var distanceToRightSpace = string[startingIndex].map(predicate);
  var distanceToLeftSpace = string.split("").reverse().join("")[string[startingIndex]].map(predicate);

  return Math.min(distanceToLeftSpace[0], distanceToRightSpace[0]);
};

// str = '1 34 47'
// a1 = 'a '
// b1 ='b c'

// a2 = 'a b'
// b2 ' c'

// '12 456'

var getMiddleIndex = function getMiddleIndex(string) {
  var middleIndex = string.length / 2 - 1;
  var hasEvenLength = Number.isInteger(middleIndex);
  console.log(middleIndex);
  if (hasEvenLength && string[middleIndex] === " ") return middleIndex;

  if (hasEvenLength) {
    return getNearestSpace(string, middleIndex);
  }

  var stringArray = string.split("");

  // if (!Number.isInteger(half)) {
  //   if (string[Math.ceil(half)] === " ") {
  //     return [
  //       string.substring(0, Math.floor(half)),
  //       string.substring(Math.floor(half), string.length)
  //     ];
  //   } else if (string[Math.floor(half)] === " ") {
  //     return [
  //       string.substring(0, Math.ceil(half)),
  //       string.substring(Math.ceil(half), string.length)
  //     ];
  //   }
  // }
};