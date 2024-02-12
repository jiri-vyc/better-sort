import { sortAsc, sortDesc } from "./index";

describe("sortAsc", () => {
  it("should correctly sort a primitive array in ascending order", () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6];
    const expectedArray = [1, 1, 2, 3, 4, 5, 6, 9];
    expect(
      sortAsc({
        array: inputArray,
        firstIsGreater: (a, b) => a > b,
      })
    ).toEqual(expectedArray);
  });

  it("should correctly sort an array of objects by a specific property in ascending order", () => {
    const inputArray = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const expectedArray = [
      { name: "Bob", age: 20 },
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
    ];
    expect(
      sortAsc({
        array: inputArray,
        firstIsGreater: (a, b) => a.age > b.age,
      })
    ).toEqual(expectedArray);
  });

  it("should leave the original array unsorted", () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6];
    const originalArray = [...inputArray];
    sortAsc({
      array: inputArray,
      firstIsGreater: (a, b) => a > b,
    });
    expect(inputArray).toEqual(originalArray);
  });

  // Test for https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
  it("should be stable and consistent with default sort when sorting equal elements (keep their order that they are in input)", () => {
    const inputArray = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
      { name: "Mike", age: 25 },
    ]; // John and Mike have the same age
    const defaultSorted = [...inputArray].sort((a, b) => a.age - b.age);
    const expectedArray = [
      { name: "Bob", age: 20 },
      { name: "John", age: 25 },
      { name: "Mike", age: 25 },
      { name: "Alice", age: 30 },
    ];
    expect(
      sortAsc({
        array: inputArray,
        firstIsGreater: (a, b) => a.age > b.age,
        areEqual: (a, b) => a.age === b.age,
      })
    ).toEqual(expectedArray);
    expect(
      sortAsc({
        array: inputArray,
        firstIsGreater: (a, b) => a.age > b.age,
        areEqual: (a, b) => a.age === b.age,
      })
    ).toEqual(defaultSorted);
  });
});

describe("sortDesc", () => {
  it("should correctly sort a primitive array in descending order", () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6];
    const expectedArray = [9, 6, 5, 4, 3, 2, 1, 1];
    expect(
      sortDesc({
        array: inputArray,
        firstIsGreater: (a, b) => a > b,
      })
    ).toEqual(expectedArray);
  });

  it("should correctly sort an array of objects by a specific property in descending order", () => {
    const inputArray = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const expectedArray = [
      { name: "Alice", age: 30 },
      { name: "John", age: 25 },
      { name: "Bob", age: 20 },
    ];
    expect(
      sortDesc({
        array: inputArray,
        firstIsGreater: (a, b) => a.age > b.age,
      })
    ).toEqual(expectedArray);
  });

  it("should leave the original array unsorted", () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6];
    const originalArray = [...inputArray];
    sortDesc({
      array: inputArray,
      firstIsGreater: (a, b) => a > b,
    });
    expect(inputArray).toEqual(originalArray);
  });

  // Test for https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
  it("should be stable and consistent with default sort when sorting equal elements (keep their order that they are in input)", () => {
    const inputArray = [
      { name: "John", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
      { name: "Mike", age: 25 },
    ]; // John and Mike have the same age
    const defaultSorted = [...inputArray].sort((a, b) => b.age - a.age);
    const expectedArray = [
      { name: "Alice", age: 30 },
      { name: "John", age: 25 },
      { name: "Mike", age: 25 },
      { name: "Bob", age: 20 },
    ];
    expect(
      sortDesc({
        array: inputArray,
        firstIsGreater: (a, b) => a.age > b.age,
        areEqual: (a, b) => a.age === b.age,
      })
    ).toEqual(expectedArray);
    expect(
      sortDesc({
        array: inputArray,
        firstIsGreater: (a, b) => a.age > b.age,
      })
    ).toEqual(defaultSorted);
  });
});
