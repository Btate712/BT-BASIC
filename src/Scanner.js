const Token = require("./Token.js");
const Symbol = require("./Symbol.js");
const Command = require("./Command.js");

class Scanner {
  tokens = [];
  currentIndex = 0;
  currentTokenType = "unknown";
  currentTokenValue = " ";
  currentTokenLength = 1;

  constructor(code) {
    this.code = code;
    this.tokenize();
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
    if(Symbol.isNumeric(this.currentCharacter()) || (this.currentCharacter() == '-' && this.minusIsNegation())) {
      this.currentTokenType = "NUMBER";
    } else if (this.currentCharacter() == "\"") {
      this.currentTokenType = "STRING";
    } else if (Symbol.existsFor(this.currentCharacter())) {
      // check for 2-character symbols (e.g. <=)
      if(Symbol.existsFor(`${this.currentCharacter()}${this.lookAhead()}`)) {
        this.currentTokenType = Symbol.nameFor(`${this.currentCharacter()}${this.lookAhead()}`);
      } else {
        this.currentTokenType = Symbol.nameFor(this.currentCharacter());
      }
    } else if(Command.isCommand(this.currentWord())) {
        this.currentTokenType = this.currentWord();
    } else if(Symbol.isIdentifier(this.currentCharacter())) {
      this.currentTokenType = "IDENTIFIER";
    }
  }

  setCurrentTokenValue() {
    if(this.currentTokenType == "NUMBER") {
      this.currentTokenValue = this.extractNumber();
    } else if (this.currentTokenType == "STRING") {
      this.currentTokenValue = this.extractString();
    } else if (this.currentTokenType == "IDENTIFIER") {
      this.currentTokenValue = this.determineIdentiferValue();
    } else if (Symbol.isSymbol(this.currentTokenType) || Command.isCommand(this.currentTokenType)) {
      this.currentTokenValue = "NULL";
    } 
  }

  extractNumber() {
    let foundDecimal = false;
    let numberString = "" + this.currentCharacter();
    let i = 1;
    while(Symbol.isNumeric(this.lookAhead(i)) && ((this.currentIndex + i) < this.code.length)) {
      if(this.lookAhead(i) == ".") {
        if(foundDecimal) {
          throw("Error - invalid number");
        }
        foundDecimal = true;
      }
      numberString = numberString + this.lookAhead(i);
      i++;
    }
    return foundDecimal ? parseFloat(numberString) : parseInt(numberString);
  }

  extractString() {
    let i = 1;
    while(this.lookAhead(i) != "\"" && ((this.currentIndex + i) < this.code.length)) {
      i++;
    }
    return this.code.slice(this.currentIndex + 1, this.currentIndex + i);
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
    } else if (Command.isCommand(this.currentWord())) {
      return this.currentWord().length;
    }
  }

  resetCurrentToken() {
    this.currentTokenType = "unknown";
    this.currentTokenValue = " ";
    this.currentTokenLength = 1;
  }

  lookAhead(i = 1) {
    return this.currentIndex < this.code.length - 1 ? this.code[this.currentIndex + i] : " ";
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

    while(
      Symbol.isAlpha(this.lookAhead(i)) || 
      Symbol.isNumeric(this.lookAhead(i))
      ) {
      identifierString += this.lookAhead(i);
      i++;
    }
    return identifierString;
  }

  minusIsNegation() {
    if(!this.lastToken() || Token.fromString(this.lastToken()).getType() != "NUMBER") {
      return true;
    }
  }

  currentWord() {
    let i = 1;
    let word = this.currentCharacter();

    while(this.lookAhead(i) != " " && this.currentIndex + i < this.code.length) {
      word += this.lookAhead(i);
      i++;
    }
    return word;
  }
}

module.exports = Scanner;