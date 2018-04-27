module.exports = {
 'parser': 'babel-eslint',
  'extends': [
    'airbnb',
  ],
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  'globals': {
    'fetch': false,
    'firebase': false,
    'document': true
  },
  'rules': {
    'semi': [2, 'never'],
    'react/prefer-stateless-function':  0,
    'arrow-body-style': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/forbid-prop-types': 0,
  }
}
