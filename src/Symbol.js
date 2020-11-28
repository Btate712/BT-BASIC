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
    return !!this.SYMBOL_CHARS[name]["symbol"];
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
}


module.exports = Symbol;