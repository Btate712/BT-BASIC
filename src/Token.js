class Token {
  constructor(type, value) {
    self.type = type;
    self.value = value;
  }

  toString() {
    return `${self.type}: ${self.value}`;
  }
}

module.exports = Token;