"use strict";

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("module", function () {
  it("should workd", function () {
    expect((0, _index2.default)("123 56")).toEqual(3);
    expect((0, _index2.default)("12 456")).toEqual(2);
    expect((0, _index2.default)("12 45 7")).toEqual(2);
    // 3 or 4 would be the same
    expect((0, _index2.default)("123 5 7")).toEqual(3);
    // 2 or 3 would be the same
    expect((0, _index2.default)("12 4 67")).toEqual(2);
    expect((0, _index2.default)("a")).toEqual(0);
    expect((0, _index2.default)("")).toEqual(0);
  });
});