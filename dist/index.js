"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getNearestSpace = function getNearestSpace(string, startingIndex) {
  var rightDistance = void 0;
  var i = 0;
  var subStr = string.substring(startingIndex);
  while (rightDistance !== null && i <= string.length - 1 - startingIndex) {
    if (subStr[i] === " ") {
      rightDistance = startingIndex - i;
    }
    i += 1;
  }

  var leftDistance = void 0;
  i = startingIndex;
  subStr = string.substring(0, startingIndex);
  while (leftDistance !== null && i >= 0) {
    if (subStr[i] === " ") {
      leftDistance = i;
    }
    i -= 1;
  }
  return !rightDistance && !leftDistance ? 0 : Math.min(rightDistance || Infinity, leftDistance || Infinity);
};

var getMiddleIndex = function getMiddleIndex(string) {
  if (typeof string !== "string") {
    throw new Error("Argument must be a string");
  }

  if (string.length <= 1) {
    return 0;
  }

  var middleIndex = string.length / 2;
  var hasEvenLength = Number.isInteger(middleIndex);
  if (hasEvenLength && string[middleIndex] === " ") return middleIndex;

  if (hasEvenLength) {
    return getNearestSpace(string, middleIndex);
  }

  return getNearestSpace(string, Math.ceil(middleIndex));
};

exports.default = getMiddleIndex;