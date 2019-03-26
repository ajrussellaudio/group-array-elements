const assert = require("assert");
const groupArrayElements = require("../src/groupArrayElements");

describe("groupArrayElements", () => {
  it("returns the original array when N is 0 or less", () => {
    const input = [1, 2, 3, 4, 5];
    const result = groupArrayElements(input, 0);
    assert.deepEqual(result, input);
  });

  it("groups an array into 1 new array when N is 1", () => {
    const input = [1, 2, 3, 4, 5];
    const result = groupArrayElements(input, 1);
    assert.deepEqual(result, [[1, 2, 3, 4, 5]]);
  });

  it("groups an array into 3 new arrays when N is 3", () => {
    const input = [1, 2, 3, 4, 5];
    const result = groupArrayElements(input, 3);
    assert.deepEqual(result, [[1, 2], [3, 4], [5]]);
  });

  it("groups array into `length` arrays when N is `length`", () => {
    const input = [1, 2, 3, 4, 5];
    const result = groupArrayElements(input, input.length);
    assert.deepEqual(result, [[1], [2], [3], [4], [5]]);
  });

  it("groups array into `length` arrays when N is greater than `length`", () => {
    const input = [1, 2, 3, 4, 5];
    const result = groupArrayElements(input, input.length + 1);
    assert.deepEqual(result, [[1], [2], [3], [4], [5]]);
  });
});
