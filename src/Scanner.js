const Token = require("./Token.js");
const Symbol = require("./Symbol.js");

class Scanner {
  tokens = [];
  currentIndex = 0;
  currentTokenType = "unknown";
  currentTokenValue = " ";
  currentTokenLength = 1;

  constructor(code) {
    this.code = code;
  }

  tokenize() {
    for(; this.currentIndex < this.code.length;) {
      if(this.currentCharacter() != " ") {
        this.setCurrentTokenInfo();
        const token = new Token(this.currentTokenType, this.currentTokenValue);
        this.tokens.push(token.toString());
        this.currentIndex += this.currentTokenLength;
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
    this.currentTokenLength = this.getCurrentTokenLength();
  }
  
  setCurrentTokenType() {
    if(Symbol.isNumeric(this.currentCharacter()) || (
      this.currentCharacter() == '-' && this.minusIsNegation()))
      {
      this.currentTokenType = "NUMBER";
    } else if (this.currentCharacter() == "\"") {
      this.currentTokenType = "STRING";
    } else if (Symbol.existsFor(this.currentCharacter())) {
      this.currentTokenType = Symbol.nameFor(this.currentCharacter());
    } else if(Symbol.isIdentifier(this.currentCharacter())) {
      this.currentTokenType = "IDENTIFIER";
    }
  }

  setCurrentTokenValue() {
    if(this.currentTokenType == "NUMBER") {
      let foundDecimal = false;
      let numberString = "" + this.currentCharacter();
      let i = 1;
      while(Symbol.isNumeric(this.code[this.currentIndex + i]) && ((this.currentIndex + i) < this.code.length)) {
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
    } else if (this.currentTokenType == "IDENTIFIER") {
      this.currentTokenValue = this.determineIdentiferValue();
    } else if (Symbol.isSymbol(this.currentTokenType)) {
      this.currentTokenValue = "NULL";
    } 
  }

  getCurrentTokenLength() {
    if(this.currentTokenType == "NUMBER") {
      const length = ("" + this.currentTokenValue).length;
      return length;
    } else if (this.currentTokenType == "STRING") {
      const length = this.currentTokenValue.length + 2;
      return length;
    } else if (this.currentTokenType == "IDENTIFIER") {
      return this.currentTokenValue.length;
    } else if (Symbol.existsFor(this.currentCharacter())) {
      return Symbol.lengthOf(this.currentTokenType);
    }
  }

  resetCurrentToken() {
    this.currentTokenType = "unknown";
    this.currentTokenValue = " ";
    this.currentTokenLength = 1;
  }

  lookAhead() {
    return this.code[this.currentIndex + 1];
  }

  lastToken() {
    return this.tokens.length > 0 ? this.tokens[this.tokens.length - 1] : undefined;
  }

  currentCharacter() {
    return this.code[this.currentIndex];
  }

  determineIdentiferValue() {
    let identifierString = this.currentCharacter();
    let i = 1;
    while(Symbol.isAlpha(this.lookAhead()) || Symbol.isNumeric(this.lookAhead())) {
      identifierString.push(this.code[this.currentIndex + i]);
    }
    return identifierString;
  }

  minusIsNegation() {
    if(!this.lastToken() || Token.fromString(this.lastToken()).getType() != "NUMBER") {
      return true;
    }
  }
}

module.exports = Scanner;