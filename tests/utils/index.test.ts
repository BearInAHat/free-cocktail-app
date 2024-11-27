import {
  capitalizeFirstLetter,
  removeSlashes,
  uncapitalizeFirstLetter,
} from "Utils";
import "@testing-library/jest-dom";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world")).toBe("World");
    expect(capitalizeFirstLetter("test")).toBe("Test");
  });
  it("should return an empty string if input is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });
  it("should not affect a string that is already capitalized", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  });
});

describe("uncapitalizeFirstLetter", () => {
  it("should uncapitalize the first letter of a string", () => {
    expect(uncapitalizeFirstLetter("Hello")).toBe("hello");
    expect(uncapitalizeFirstLetter("World")).toBe("world");
    expect(uncapitalizeFirstLetter("Test")).toBe("test");
  });
  it("should return an empty string if input is empty", () => {
    expect(uncapitalizeFirstLetter("")).toBe("");
  });
  it("should not affect a string that is already uncapitalized", () => {
    expect(uncapitalizeFirstLetter("hello")).toBe("hello");
  });
});

describe("removeSlashes", () => {
  it("should remove all slashes from a string", () => {
    expect(removeSlashes("hello/world")).toBe("helloworld");
    expect(removeSlashes("/path/to/file/")).toBe("pathtofile");
    expect(removeSlashes("///////")).toBe("");
  });
  it("should return the same string if no slashes are present", () => {
    expect(removeSlashes("hello")).toBe("hello");
  });
  it("should handle an empty string", () => {
    expect(removeSlashes("")).toBe("");
  });
});
