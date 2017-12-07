module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 2017,
  },
  'rules': {
    // basic syntax
    'indent': [
      'warn',
      2, // disallows indents that are not 2 spaces
      {
        'SwitchCase': 1,
      }
    ],
    'semi': [
      'warn',
      'always' // always require semicolons
    ],

    // errors
    'no-compare-neg-zero': 'error', // no comparisons to negative zero
    'no-cond-assign': 'error', // disallow assignment operators in conditional statements ex: if (x = 1) is incorrect should be if (x == 1)
    'no-console': 'warn', // discourage using console.log
    'no-constant-condition': 'error', // disallows constant values in conditionals ex: while (true)
    'no-control-regex': 'error', // disallow control characters in regex: Control characters are special, invisible characters in the ASCII range 0-31.
    'no-debugger': 'error', // disallows debugger statements (debugger is a keyword that is equivalent to breakpoints in the console)
    'no-dupe-args': 'error', // disallows duplicate arguments in a function declaration
    'no-dupe-keys': 'error', // disallows duplicate keys in objects
    'no-duplicate-case': 'error', // disallows duplicate cases in a switch statement
    'no-empty': 'error', // disallows empty block statements ex: if (x == 1) {}
    'no-empty-character-class': 'error', // disallows empty character classes in regex because they don't match to anything
    'no-ex-assign': 'error', // disallows reassigning exceptions in a catch clause
    'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
    'no-extra-parens': 'error', // disallows unnecessary parens
    'no-extra-semi': 'error', // disallows accidental extra semicolons
    'no-func-assign': 'error', // disallow reassigning function declarations ex: function foo() {} ... foo = bar;
    'no-invalid-regexp': 'error', // disallows invalid regex
    'no-obj-calls': 'error', // disallows calling built-in global objects as functions because they are not constructors
    'no-regex-spaces': 'error', // disallow multiple spaces in regular expression literals bad: var re = /foo   bar/; good: var re = /foo {3}bar/;
    'no-sparse-arrays': 'error', // disallow empty value in array
    'no-unexpected-multiline': 'error', // disallow confusing multiline expressions
    'no-unreachable': 'error', // disallows unreachabel code
    'no-unsafe-finally': 'error', // disallow control flow statements in finally blocks
    'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
    'use-isnan': 'error', // enforces the usage of isNan or Number.isNan instead of NaN === NaN or NaN !== NaN
    'valid-typeof': 'error', // enforces a valid typeof check to something that is actually a result of typeof
    'no-inner-declarations': 'error', // function declarations must be outside of nested blocks to avoid breaking on iOS 9

    // best practices
    'array-callback-return': 'warn', // enforces return statements in callbacks of array’s methods
    'curly': 'warn', // enforces curly braces for blocks because omitting them can cause rare errors
    'eqeqeq': 'warn', // enforces ===
    'no-case-declarations': 'warn', // disallow lexical declarations in case/default clauses
    'no-else-return': 'warn', // disallow return before else - highlights an unnecessary block of code following an if containing a return statement
    'no-empty-function': 'warn', // disallow empty functions
    'no-eq-null': 'warn', // disallow comparing to null without type checking ex: == is bad === is good
    'no-eval': 'error', // no eval()
    'no-fallthrough': 'warn', // no case fallthrough, enforces the usage of break
    'no-global-assign': 'error', // no assignments for global variables such as window or Object
    'no-implicit-coercion': 'warn', // enforce explicit type casting
    'no-implicit-globals': 'warn', // enforce explicit setting of globals ex: var x = 0 is bad but window.var = 0 is valid
    'no-multi-spaces': 'warn', // disallow unnecessary white space
    'no-octal': 'warn', // disallow octal literals ex: a number that starts with a leading zero
    'no-param-reassign': 'error', // no reassignment of function parameters
    'no-redeclare': 'error', // disallow redeclaring a variable when using var
    'no-self-assign': 'error', // disable reassigning a variable to itself
    'no-self-compare': 'error', // no comparisons of a value to itself
    'yoda': 'warn', // disables literal value of the condition before variable
    'prefer-promise-reject-errors': 'warn', // require using Error object when rejecting a promise
    'no-unused-vars': 'warn', // no unused variables

    // style
    'no-unneeded-ternary': 'warn', // disallow ternary operators when simpler alternatives exist

    // ES6
    'arrow-parens': 'warn', // enforce usage of parentheses for arguments in arrow functions
    'constructor-super': 'error', // checks for correct usage of super() in class constructors
    'arrow-spacing': 'warn', // requires spaces before and after an arrow in an arrow function
    'no-confusing-arrow': 'warn', // disallows situations of => where it could be confusing
    'no-class-assign': 'error', // no reassignment of classes
    'no-const-assign': 'error', // no reassignment of const
    'no-dupe-class-members': 'error', // no duplicate methods in a class
    'no-this-before-super': 'error', // disallow usage of this before super() in a child class
    'no-useless-constructor': 'warn', // no empty constructor
    'no-var': 'warn', // disallow usage of var
    'prefer-arrow-callback': 'warn', // require using arrow functions for callbacks
    'prefer-spread': 'warn', // prefer the spread operator when creating arrays
    'prefer-template': 'warn', // prefer template literals rather than concatenation
  }
};
