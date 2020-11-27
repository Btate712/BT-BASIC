const Token = require("./Token.js");

class Scanner {
  tokens = [];

  constructor(code) {
    this.code = code;
  }

  tokenize() {
    this.tokens = this.code.split(" ");
  }

  getTokens() {
    return this.tokens;
  }
}

module.exports = Scanner;