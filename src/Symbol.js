const KEYWORDS = require("./constants/KEYWORDS.js");

class Symbol {
  static SYMBOL_CHARS = KEYWORDS.CHARACTERS;

  static existsFor(character) {
    let found = false;
    Object.keys(this.SYMBOL_CHARS).forEach(key => {
      if(this.SYMBOL_CHARS[key]["symbol"] == character) {
        found = true;
      }
    });
    return found;
  }
  
  static isSymbol(name) {
    return this.SYMBOL_CHARS[name] ? this.SYMBOL_CHARS[name]["symbol"] : false;
  }

  static nameFor(character) {
    let returnValue = "NOT FOUND";
    Object.keys(this.SYMBOL_CHARS).forEach(key => {
      if(this.SYMBOL_CHARS[key]["symbol"] == character) {
        returnValue = key;
      }
    });
    return returnValue;
  }

  static symbolFor(name) {
    return this.SYMBOL_CHARS[name]["symbol"];
  }

  static lengthOf(name) {
    return this.SYMBOL_CHARS[name]["symbol"].length;
  }

  static isAlpha(character) {
    return !!character.match(/[a-zA-Z_]/i);
  }

  static isIdentifier(word) {
    return this.isAlpha(word[0]);
  }

  static isNumeric(character) {
    return (character == "0" || !!parseInt(character) || character == ".")
  }
}


module.exports = Symbol;