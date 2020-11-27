const Token = require("../src/Token.js");

test("Can represent a token as a string", () => {
  t = new Token("INTEGER", 5);
  expect(t.toString()).toEqual("INTEGER: 5");
});