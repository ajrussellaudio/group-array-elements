const assert = require("assert");
const groupArrayElements = require("../src/groupArrayElements");

describe("groupArrayElements", () => {
  it("returns the original array when N is 0 or less", () => {
    const input = [1, 2, 3, 4, 5];
    const result = groupArrayElements(input, 0);
    assert.deepEqual(result, input);
  });

  it("groups an array into 1 new array when N is 1");

  it("groups an array into 3 new arrays when N is 3");

  it("groups array into `length` arrays when N is greater than `length`");
});
