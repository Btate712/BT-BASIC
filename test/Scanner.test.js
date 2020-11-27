const Scanner = require("../src/Scanner.js");

test("Should be able to instantiate a Scanner", () => {
  let scanner = new Scanner("");
  expect(scanner.getTokens()).toEqual([]);
})

test("Can identify a numeric token", () => {
  let scanner = new Scanner("805");
  scanner.tokenize();
  expect(scanner.getTokens()[0].getType()).toEqual("NUMBER");
  expect(scanner.getTokens()[0].toString()).toEqual("NUMBER: 805");
})