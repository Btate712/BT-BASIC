const Scanner = require("../src/Scanner.js");

test("Should be able to instantiate a Scanner", () => {
  let scanner = new Scanner("");
  expect(scanner.getTokens()).toEqual([]);
});

test("Can identify an integer token", () => {
  let scanner = new Scanner("805");
  scanner.tokenize();
  expect(scanner.getTokens()[0].getType()).toEqual("NUMBER");
  expect(scanner.getTokens()[0].toString()).toEqual("NUMBER: 805");
});

test("Can identify a numeric floating value token", () => {
  let scanner = new Scanner("11.94");
  scanner.tokenize();
  expect(scanner.getTokens()[0].getType()).toEqual("NUMBER");
  expect(scanner.getTokens()[0].toString()).toEqual("NUMBER: 11.94");
});

test("Throws error for invalid numeric input", () => {
  let scanner = new Scanner("2321.23.323");
  expect(() => scanner.tokenize()).toThrow();
});