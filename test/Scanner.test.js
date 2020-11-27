const Scanner = require("../src/Scanner.js");

test("Should be able to instantiate a Scanner", () => {
  let scanner = new Scanner("some code");
  expect(scanner.getTokens()).toEqual([]);
})