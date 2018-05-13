// @flow
const getNearestSpace = (string, startingIndex) => {
  let rightDistance;
  let i = 0;
  let subStr = string.substring(startingIndex);
  while (rightDistance !== null && i <= string.length - 1 - startingIndex) {
    if (subStr[i] === " ") {
      rightDistance = startingIndex - i;
    }
    i += 1;
  }

  let leftDistance;
  i = startingIndex;
  subStr = string.substring(0, startingIndex);
  while (leftDistance !== null && i >= 0) {
    if (subStr[i] === " ") {
      leftDistance = i;
    }
    i -= 1;
  }
  return !rightDistance && !leftDistance
    ? 0
    : Math.min(rightDistance || Infinity, leftDistance || Infinity);
};

const getMiddleIndex = (string: string): number => {
  if (typeof string !== "string") {
    throw new Error("Argument must be a string");
  }

  if (string.length <= 1) {
    return 0;
  }

  const middleIndex = string.length / 2;
  const hasEvenLength = Number.isInteger(middleIndex);
  if (hasEvenLength && string[middleIndex] === " ") return middleIndex;

  if (hasEvenLength) {
    return getNearestSpace(string, middleIndex);
  }

  return getNearestSpace(string, Math.ceil(middleIndex));
};

export default getMiddleIndex;
