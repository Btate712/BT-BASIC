const Scanner = require("../src/Scanner.js");

// test("Should be able to instantiate a Scanner", () => {
//   let scanner = new Scanner("");
//   expect(scanner.getTokens()).toEqual([]);
// });

// test("Can identify an integer token", () => {
//   let scanner = new Scanner("805");
//   scanner.tokenize();
//   expect(scanner.getTokens()[0]).toEqual("NUMBER: 805");
// });

// test("Can identify a numeric floating value token", () => {
//   let scanner = new Scanner("11.94");
//   scanner.tokenize();
//   expect(scanner.getTokens()[0]).toEqual("NUMBER: 11.94");
// });

// test("Can identify a negative numeric value", () => {
//   let scanner = new Scanner("-25");
//   scanner.tokenize();
//   expect(scanner.getTokens()[0]).toEqual("NUMBER: -25");
// })

// test("Throws error for invalid numeric input", () => {
//   let scanner = new Scanner("2321.23.323");
//   expect(() => scanner.tokenize()).toThrow();
// });

// test("Can identify a string value token", () => {
//   let scanner = new Scanner("\"Hello world\"");
//   scanner.tokenize();
//   expect(scanner.getTokens()[0]).toEqual("STRING: Hello world");
// });

// test("Can identify a string value token and an integer value token", () => {
//   let scanner = new Scanner("\"Hello\" 12345");
//   scanner.tokenize();
//   expect(scanner.getTokens()[0]).toEqual("STRING: Hello");
//   expect(scanner.getTokens()[1]).toEqual("NUMBER: 12345");
// });

// test("Can look ahead one character", () => {
//   let scanner = new Scanner("12345");
//   expect(scanner.lookAhead()).toEqual("2");
// });

// test("Can check last token added", () => {
//   let scanner = new Scanner("\"Hello\" 123 234 567");
//   scanner.tokenize();
//   expect(scanner.lastToken()).toEqual("NUMBER: 567");
// });

// test("Can identify symbols found in KEYWORDS", () => {
//   let scanner = new Scanner("(123 - 245)");
//   scanner.tokenize();
//   expect(scanner.getTokens()[0]).toEqual("LEFT_PAREN: NULL");
//   expect(scanner.getTokens()[1]).toEqual("NUMBER: 123");
//   expect(scanner.getTokens()[2]).toEqual("MINUS: NULL");
//   expect(scanner.getTokens()[3]).toEqual("NUMBER: 245");
//   expect(scanner.getTokens()[4]).toEqual("RIGHT_PAREN: NULL");
// });

test("Can identify variable identifiers", () => {
  let scanner = new Scanner("a = 5.25");
  scanner.tokenize();
  expect(scanner.getTokens()[0]).toEqual("IDENTIFIER: a");
  expect(scanner.getTokens()[1]).toEqual("EQUAL: NULL");
  expect(scanner.getTokens()[2]).toEqual("NUMBER: 5.25");
});