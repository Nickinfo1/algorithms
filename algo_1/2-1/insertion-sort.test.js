const insertionSort = require("./insertion-sort.js");

describe("Insertion sort", () => {
  test("Text element in array", () => {
    expect(insertionSort([1, 2, "h", 3])).toEqual([]);
  });
});
