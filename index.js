'use strict';

module.exports = {
  'extends': 'eslint:recommended',
  'rules':   {

    /* error catching */
    'valid-jsdoc': 1,


    /* best practices */
    'eqeqeq':               0,
    'no-implicit-coercion': 0,
    'no-implicit-globals':  0,
    'no-magic-numbers':     0,
    'no-multi-spaces':      0,
    'no-new':               0,
    'no-process-env':       0,
    'vars-on-top':          0,
    'no-param-reassign':    0, // decided I am okay with this

    'no-invalid-this':              1,
    'no-loop-func':                 1,
    'no-return-assign':             1,
    'no-unmodified-loop-condition': 1,
    'no-warning-comments':          1,
    'radix':                        1,
    'yoda':                         1,

    'block-scoped-var':      2,
    'complexity':            [2, 20],
    'consistent-return':     2,
    'curly':                 2,
    'dot-location':          [2, 'property'],
    'dot-notation':          2,
    'guard-for-in':          2,
    'no-alert':              2,
    'no-caller':             2,
    'no-case-declarations':  2,
    'no-div-regex':          2,
    'no-else-return':        2,
    'no-empty-function':     2,
    'no-eq-null':            2,
    'no-eval':               2,
    'no-extend-native':      2,
    'no-extra-bind':         2,
    'no-extra-label':        2,
    'no-floating-decimal':   2,
    'no-implied-eval':       2,
    'no-iterator':           2,
    'no-labels':             2,
    'no-lone-blocks':        2,
    'no-multi-str':          2,
    'no-native-reassign':    2,
    'no-new-func':           2,
    'no-new-wrappers':       2,
    'no-octal':              2,
    'no-octal-escape':       2,
    'no-proto':              2,
    'no-redeclare':          2,
    'no-script-url':         2,
    'no-self-assign':        2,
    'no-self-compare':       2,
    'no-sequences':          2,
    'no-throw-literal':      2,
    'no-unused-expressions': 2,
    'no-unused-labels':      2,
    'no-useless-call':       2,
    'no-useless-concat':     2,
    'no-void':               2,
    'no-with':               2,
    'wrap-iife':             2,


    /* strict */
    'strict': 2,


    /* variables */
    'init-declarations': 0,

    'no-catch-shadow':            2,
    'no-delete-var':              2,
    'no-label-var':               2,
    'no-restricted-globals':      2,
    'no-shadow':                  2,
    'no-shadow-restricted-names': 2,
    'no-undef':                   2,
    'no-undef-init':              2,
    'no-undefined':               2,
    'no-unused-vars':             2,
    'no-use-before-define':       2,


    /* node */
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,

    'callback-return': 1, // unsure
    'no-process-exit': 1,
    'no-sync':         1,

    'global-require':      2,
    'handle-callback-err': 2,
    'no-mixed-requires':   2,
    'no-new-require':      2,
    'no-path-concat':      2,


    /* style */
    'block-spacing':             0, // not sure
    'computed-property-spacing': 0,
    'eol-last':                  0, // i do this but don't really care
    'func-names':                0,
    'func-style':                0,
    'id-blacklist':              0,
    'id-length':                 0,
    'id-match':                  0,
    'jsx-quotes':                0,
    'key-spacing':               0,
    'lines-around-comment':      0,
    'max-len':                   [0, {'code': 80, 'ignoreTrailingComments': true}], // this annoyed me
    'new-cap':                   0,
    'newline-after-var':         0,
    'newline-before-return':     0,
    'no-bitwise':                0,
    'no-continue':               0,
    'no-inline-comments':        0,
    'no-lonely-if':              0,
    'no-plusplus':               0,
    'no-restricted-syntax':      0, // seems redundant
    'no-ternary':                0,
    'no-underscore-dangle':      0,
    'object-curly-spacing':      0,
    'padded-blocks':             0, // i have flip flopping opinions on this
    'sort-imports':              0, // unsure
    'sort-vars':                 0, // maybe
    'space-in-parens':           0,
    'space-infix-ops':           0,
    'space-unary-ops':           0,
    'spaced-comment':            0,
    'wrap-regex':                0,

    'camelcase':            [1, {'properties': 'always'}],
    'consistent-this':      [1, 'self'],
    'linebreak-style':      1,
    'max-depth':            [1, 4],
    'max-params':           [1, 4],
    'max-statements':       [1, 15],
    'no-array-constructor': 1,
    'no-negated-condition': 1,
    'no-unneeded-ternary':  1,
    'operator-assignment':  [1, 'always'],
    'require-jsdoc':        1,

    'array-bracket-spacing':         [2, 'never', {'objectsInArrays': true, 'arraysInArrays': true}],
    'brace-style':                   [2, '1tbs'],
    'comma-spacing':                 [2, {'before': false, 'after': true}],
    'comma-style':                   [2, 'last'],
    'indent':                        [2, 2, {'SwitchCase': 1}],
    'keyword-spacing':               2,
    'max-nested-callbacks':          [2, 10],
    'new-parens':                    2,
    'newline-per-chained-call':      [2, {'ignoreChainWithDepth': 3}],
    'no-mixed-spaces-and-tabs':      2,
    'no-multiple-empty-lines':       [2, {'max': 3, 'maxEOF': 1}],
    'no-nested-ternary':             2,
    'no-new-object':                 2,
    'no-spaced-func':                2,
    'no-trailing-spaces':            [2, {'skipBlankLines': true}],
    'no-whitespace-before-property': 2,
    'one-var':                       [2, 'never'],
    'one-var-declaration-per-line':  2,
    'operator-linebreak':            [2, 'before', {'overrides': {'=': 'ignore'}}],
    'quote-props':                   [2, 'consistent-as-needed'],
    'quotes':                        [2, 'single'],
    'semi':                          [2, 'always'],
    'semi-spacing':                  [2, {'before': false, 'after': true}],
    'space-before-blocks':           [2, {'functions': 'always', 'keywords': 'always', classes: 'always'}],
    'space-before-function-paren':   [2, {'anonymous': 'always', 'named': 'always'}],


    /* es6 */
    'arrow-body-style':       0, // not sure on this yet
    'arrow-parens':           0, // not sure on this yet
    'generator-star-spacing': 0, // not sure on this yet
    'no-new-symbol':          0, // not sure on this yet
    'no-useless-constructor': 0,
    'no-var':                 0, // Absolutely not
    'object-shorthand':       0, // Also no
    'prefer-arrow-callback':  0, // Suck-it
    'prefer-const':           0, // not enforcing this either
    'prefer-reflect':         0, // No
    'prefer-rest-params':     0, // I like rest and spread, but not ready yet
    'prefer-spread':          0,
    'prefer-template':        0, // in time
    'template-curly-spacing': 0,
    'yield-star-spacing':     0,

    'no-this-before-super':   1,
    'require-yield':          1,

    'arrow-spacing':          [2, {"before": true, "after": true}],
    'constructor-super':      2,
    'no-class-assign':        2,
    'no-confusing-arrow':     2,
    'no-const-assign':        2,
    'no-dupe-class-members':  2,


    //'key-spacing': [2, {align: 'value'}],

  },
  'env':     {
    'node':  true,
    'es6':   true,
    'mocha': true
  }
};
