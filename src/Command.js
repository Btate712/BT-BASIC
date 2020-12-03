const KEYWORDS = require('.//constants/KEYWORDS.js');
const { COMMANDS } = KEYWORDS;

class Command {
  static isCommand(word) {
    const commandKeyWords = Object.keys(COMMANDS);
    return commandKeyWords.includes(word);
  }
}

module.exports = Command;