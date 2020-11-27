const Scanner = require("../src/Scanner.js");

test("Should be able to instantiate a Scanner", () => {
  let scanner = new Scanner("");
  expect(scanner.getTokens()).toEqual([]);
})

test("Should split code into tokens", () => {
  let scanner = new Scanner("PRINT \"Hello\"");
  scanner.tokenize();
  expect(scanner.getTokens().length).toBe(2);
});