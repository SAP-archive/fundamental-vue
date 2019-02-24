import makeSingleSelection from "./../single";
import makeMultipleSelection from "./../multiple";
import { assert } from "chai";
const { deepStrictEqual } = assert;

describe("Selection Mode", () => {
  describe("Single", () => {
    it("works with empty selection", () => {
      deepStrictEqual(makeSingleSelection([], "a"), ["a"]);
      deepStrictEqual(makeSingleSelection(["a"], "a"), []);
    });
    it("deletes existing selection when something new is added", () => {
      deepStrictEqual(makeSingleSelection(["a"], "b"), ["b"]);
    });
    it("transforms multiple selection if new value is selected", () => {
      deepStrictEqual(makeSingleSelection(["a", "b", "c"], "d"), ["d"]);
    });
    it("transforms multiple selection to empty selection", () => {
      deepStrictEqual(makeSingleSelection(["a", "b", "c"], "b"), []);
    });
  });
  describe("Multiple", () => {
    it("works with empty selection", () => {
      deepStrictEqual(makeMultipleSelection([], "a"), ["a"]);
      deepStrictEqual(makeMultipleSelection(["a"], "a"), []);
    });
    it("adds to existing selection when something is added", () => {
      deepStrictEqual(makeMultipleSelection(["a"], "b"), ["a", "b"]);
    });
    it("removes value from multiple selection if already present", () => {
      deepStrictEqual(makeMultipleSelection(["a", "b", "c"], "c"), ["a", "b"]);
    });
  });
});