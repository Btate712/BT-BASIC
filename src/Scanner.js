const Token = require("./Token.js");

class Scanner {
  tokens = [];

  constructor(code) {
    this.code = code;
  }

  getTokens() {
    return this.tokens;
  }
}

module.exports = Scanner;