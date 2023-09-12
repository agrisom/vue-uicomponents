module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'arrow-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': 'error',
    'keyword-spacing': 'error',
    'semi-style': ['error', 'last'],
    'indent': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'warn',
    'no-var': 'error',
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent'],
    'require-atomic-updates': 'error',
    'rest-spread-spacing': 'error',
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
  },
};