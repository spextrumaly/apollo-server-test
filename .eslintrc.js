module.exports = {
  parser: 'babel-eslint',
  env: { browser: true, jest: true, node: true },
  plugins: ['react', 'sort-imports-es6-autofix', 'eslint-plugin-import', 'typescript'],
  settings: { 'import/ignore': ['.util', 'node_modules'] },
  extends: ['eslint:recommended'],
  rules: {
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'react/no-unused-prop-types': 2,
    'no-unused-vars': [
      2,
      {
        varsIgnorePattern: 'React',
        args: 'none'
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
      }
    ],
    'import/named': [2, { commonjs: false }],
    'import/newline-after-import': 2,
    'no-undef': 2,
    'no-var': 2,
    semi: 2,
    'react/prop-types': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'rest-spread-spacing': 2,
    'semi-spacing': 2,
    'no-unneeded-ternary': 2,
    eqeqeq: 2,
    'dot-location': [2, 'property'],
    'no-extra-bind': 2,
    'keyword-spacing': 2,
    'key-spacing': 2,
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'func-call-spacing': 2,
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'react/self-closing-comp': 2,
    'jsx-quotes': [2, 'prefer-single'],
    quotes: [2, 'single'],
    'no-console': 2,
    'prefer-const': 2,
    'no-duplicate-imports': 2,
    'no-whitespace-before-property': 2,
    'no-useless-rename': 2,
    'no-unreachable': 2,
    camelcase: 2,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'typescript/class-name-casing': 2
  },
  globals: {
    GLOBAL: false,
    global: false,
    it: false,
    xit: false,
    expect: false,
    describe: false,
    jest: false,
    require: false,
    module: false,
    Promise: false,
    beforeAll: false,
    beforeEach: false,
    afterAll: false,
    afterEach: false,
    process: false,
    Reflect: false,
    __dirname: false
  }
};
