const Command = require('../src/Command.js');

test("Can identify a command", () => {
  expect(Command.isCommand("LET")).toBeTruthy();
});