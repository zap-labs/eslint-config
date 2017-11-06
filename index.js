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
      2,
      {
        'SwitchCase': 1,
      }
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'always'
    ],
    
    // errors
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    
    // best practices
    'array-callback-return': 'warn',
    'curly': 'warn',
    'eqeqeq': 'warn',
    'no-case-declarations': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'error',
    'no-fallthrough': 'warn',
    'no-global-assign': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'warn',
    'no-multi-spaces': 'warn',
    'no-octal': 'warn',
    'no-param-reassign': 'warn',
    'no-redeclare': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'yoda': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'no-unused-vars': 'warn',
    
    // style
    'block-spacing': 'warn',
    'brace-style': 'warn',
    'func-call-spacing': 'warn',
    'func-names': 'warn',
    'key-spacing': 'warn',
    'no-multiple-empty-lines': 'warn',
    'object-property-newline': 'warn',
    'no-unneeded-ternary': 'warn',
    'padded-blocks': [
      'warn',
      'never',
    ],
    'space-before-blocks': [
      'warn',
      'always',
    ],
    'space-before-function-paren': [
      'warn',
      'never',
    ],
    'spaced-comment': 'warn',
    
    // ES6
    'arrow-parens': 'warn',
    'constructor-super': 'warn',
    'arrow-spacing': 'warn',
    'no-confusing-arrow': 'warn',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'warn',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'template-curly-spacing': 'warn',
  }
};