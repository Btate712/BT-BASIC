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

  static fromString(inputString) {
    let parts = inputString.split(": ");
    const type = parts[0];
    let value;
    if(parts.length == 2) {
      value = parts[1];
    } else {
      parts.shift();
      const temp = parts.join(": ");
      parts = temp.split("");
      parts.shift();
      parts.pop();
      value = parts.join("");
    }
    return new Token(type, value);
  }
}

module.exports = Token;