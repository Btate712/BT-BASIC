const Symbol = require("../src/Symbol.js");

test("Should find a symbol for '('", () => {
  expect(Symbol.existsFor('(')).toBeTruthy();
});

test("Should not find a symbol for '$'", () => {
  expect(Symbol.existsFor('$')).toBeFalsy();
});

test("Should determine name for ')'", () => {
  expect(Symbol.nameFor(')')).toEqual("RIGHT_PAREN");
});

test("Should return 'NOT FOUND' for name for a symbol that is not in the language", () => {
  expect(Symbol.nameFor('#')).toEqual("NOT FOUND");
});

test("Should determine symbol for 'LEFT_PAREN'", () => {
  expect(Symbol.symbolFor('LEFT_PAREN')).toEqual("(");
});

test("Should determine length of single character symbol", () => {
  expect(Symbol.lengthOf('LEFT_PAREN')).toBe(1);
});

test("Should determine length of two character symbol", () => {
  expect(Symbol.lengthOf('BANG_EQUAL')).toBe(2);
});