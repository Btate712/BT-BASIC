const { CHARACTERS } = require("./constants/KEYWORDS.js");

class Symbol {
  static existsFor(character) {
    let found = false;
    Object.keys(CHARACTERS).forEach(key => {
      if(CHARACTERS[key]["symbol"] == character) {
        found = true;
      }
    });
    return found;
  }
  
  static isSymbol(name) {
    return CHARACTERS[name] ? CHARACTERS[name]["symbol"] : false;
  }

  static nameFor(character) {
    let returnValue = "NOT FOUND";
    Object.keys(CHARACTERS).forEach(key => {
      if(CHARACTERS[key]["symbol"] == character) {
        returnValue = key;
      }
    });
    return returnValue;
  }

  static symbolFor(name) {
    return CHARACTERS[name]["symbol"];
  }

  static lengthOf(name) {
    return CHARACTERS[name]["symbol"].length;
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