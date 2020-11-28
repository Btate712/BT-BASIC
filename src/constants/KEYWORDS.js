const KEYWORDS = {
  CHARACTERS: {
    LEFT_PAREN: {
      doc: "Left parenthases used to indicate order of operations"
    }, 
    RIGHT_PAREN: {
      doc: "Right parenthases used to indicate order of operations"
    }, 
    DOT: {
      doc: "Decimal point used in floating point numbers"
    }, 
    MINUS: {
      doc: "'-' operator, used for subtraction or negation"
    }, 
    PLUS: {
      doc: "'+' operator, used for addition and for concatenation of strings"
    }, 
    DIVIDE: {
      doc: "'/' operator, used for division"
    }, 
    MULTIPLY: {
      doc: "'*' operator, used for multiplication"
    },
    BANG: {
      doc: "'!' boolean operator, used to denote the logical 'not'"
    }, 
    BANG_EQUAL: {
      doc: "'!=' boolean operator, used to check if two values are not equal"
    },
    EQUAL: {
      doc: "'=' operator, used for assignment"
    }, 
    EQUAL_EQUAL: {
      doc: "'==' boolean operator, used to check equality"
    },
    GREATER: {
      doc: "'>' boolean operator, used to check if a value is greater than another value"
    }, 
    GREATER_EQUAL: {
      doc: "'>=' boolean operator, used to check if a value is greater than or equal to another value"
    },
    LESS: {
      doc: "'<' boolean operator, used to check if a value is less than another value"
    }, 
    LESS_EQUAL: {
      doc: "'<=' boolean operator, used to check if a value is greater than or equal to another value"
    },
    AND: {
      doc: "'&&' boolean operator, used to check if both values are true"
    },
    OR: {
      doc: "'||' boolean operator, used to check if both values are false"
    }
  },
  LITERALS: {
    IDENTIFIER: {
      doc: "Token type that indicates that its value is a variable name"
    }, 
    STRING: {
      doc: "Token type that indicates that its value is a string"
    }, 
    NUMBER: {
      doc: "Token type that indicates that its value is a number"
    }
  },
  COMMANDS: {
    IF: {
      doc: "Command used to indicate that the subsequent block of code will be executed if statement's condition is true"
    },
    ELSE: {
      doc: "Command used to indicate that the subsequent block of code will be executed if the preceding 'IF' statement's condition is false"
    }, 
    FUNCTION: {
      doc: "Command used to indicate that the subsequent block of code will be executed when the function is called with the 'CALL' keyword"
    },
    RETURN: {
      doc: "Command used to end a function by returning a value"
    },
    FOR: {
      doc: "Command used to loop through the subsequent block of code a specified number of times"
    },
    PRINT: {
      doc: "Command used to output a value to the designated output stream"
    },
    LET: {
      doc: "Command used to declare and optionally initialize a value (initialized to NIL if a value is not provided)"
    },
    DO: {
      doc: "Command indicating the beginning of a block to be looped through while the supplied condition is true"
    },
    LOOP: {
      doc: "Command indicating the end of a block to be looped through while the supplied condition is true"
    },
    WHILE: {
      doc: "Condition that must be applied to either the DO or LOOP command in all DO/LOOP pairs to indicate when the loop should continue"
    },
  },
  RESERVED_WORDS: {
    TRUE: {
      doc: "Boolean value indicating 'not false'"
    },
    FALSE: {
      doc: "Boolean value indicating 'not true'"
    }, 
    NIL: {
      doc: "A placeholder indicating that a variable has not yet been assigned a value"
    },
    EOF: {
      doc: "A value that is optionally supplied at the end of a program to indicate 'end of file'"
    }
  }
}