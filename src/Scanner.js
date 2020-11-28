const Token = require("./Token.js");

class Scanner {
  tokens = [];
  currentIndex = 0;
  currentTokenType = "unknown";
  currentTokenValue = " ";

  constructor(code) {
    this.code = code;
  }

  tokenize() {
    for(; this.currentIndex < this.code.length;) {
      if(this.code[this.currentIndex] != " ") {
        this.setCurrentTokenInfo();
        const token = new Token(this.currentTokenType, this.currentTokenValue);
        this.tokens.push(token);
        this.currentIndex += this.getCurrentTokenLength();
        this.resetCurrentToken();
      } else {
        this.currentIndex++;
      }
    }
  }

  getTokens() {
    return this.tokens;
  }

  setCurrentTokenInfo() {
    this.setCurrentTokenType();
    this.setCurrentTokenValue();
  }

  setCurrentTokenType() {
    if(this.isNumeric(this.code[this.currentIndex])) {
      this.currentTokenType = "NUMBER";
    } 
  }

  isNumeric(character) {
    return (character == "0" || !!parseInt(character) || character == ".")
  }

  setCurrentTokenValue() {
    if(this.currentTokenType == "NUMBER") {
      let foundDecimal = false;
      let numberString = "" + this.code[this.currentIndex];
      let i = 1;
      while(this.isNumeric(this.code[this.currentIndex + i]) && ((this.currentIndex + i) < this.code.length)) {
        if(this.code[this.currentIndex + i] == ".") {
          if(foundDecimal) {
            throw("Error - invalid number");
          }
          foundDecimal = true;
        }
        numberString = numberString + this.code[this.currentIndex + i];
        i++;
      }
      this.currentTokenValue = foundDecimal ? parseFloat(numberString) : parseInt(numberString);
    }
  }

  getCurrentTokenLength() {
    if(this.currentTokenType == "NUMBER") {
      const length = ("" + this.currentTokenValue).length;
      return (length);
    }
  }

  resetCurrentToken() {
    this.currentTokenType = "unknown";
    this.currentTokenValue = " ";
  }
}

module.exports = Scanner;