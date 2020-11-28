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
        this.tokens.push(token.toString());
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
    } else if (this.code[this.currentIndex] == "\"") {
      this.currentTokenType = "STRING";
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
    } else if (this.currentTokenType == "STRING") {
      let i = 1;
      while(this.code[this.currentIndex + i] != "\"" && ((this.currentIndex + i) < this.code.length)) {
        i++;
      }
      this.currentTokenValue = this.code.slice(this.currentIndex + 1, this.currentIndex + i);
    }
  }

  getCurrentTokenLength() {
    if(this.currentTokenType == "NUMBER") {
      const length = ("" + this.currentTokenValue).length;
      return (length);
    } else if (this.currentTokenType = "STRING") {
      const length = this.currentTokenValue.length + 2;
      return (length);
    }
  }

  resetCurrentToken() {
    this.currentTokenType = "unknown";
    this.currentTokenValue = " ";
  }
}

module.exports = Scanner;