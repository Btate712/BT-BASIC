const { COMMANDS } = require('.//constants/KEYWORDS.js');

class Command {
  static isCommand(word) {
    const commandKeyWords = Object.keys(COMMANDS);
    return commandKeyWords.includes(word);
  }
}

module.exports = Command;