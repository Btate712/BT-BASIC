class Token {
  constructor(type, value) {
    self.type = type;
    self.value = value;
  }

  toString() {
    return `${self.type}: ${self.value}`;
  }

  getType() {
    return self.type;
  }

  static split(inputString) {
    const parts = inputString.split(": ");
    return new Token(parts[0], parts[1]);
  }
}

module.exports = Token;