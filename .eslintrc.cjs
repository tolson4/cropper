// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        '@babel/plugin-syntax-import-assertions'
      ]
    }
  },
  env: {
    'shared-node-browser': true,
    node: true
  },
  extends: [
    'digitalbazaar',
    'digitalbazaar/vue3',
    'digitalbazaar/jsdoc'
  ],
  ignorePatterns: ['node_modules/'],
  rules: {
    'unicorn/prefer-node-protocol': 'error'
  },
  overrides: [{
    // for files matching this pattern
    files: ['*.vue'],
    // following config will override "normal" config
    parser: 'vue-eslint-parser',
    parserOptions: {
      // this is required for dynamic import() and top-level await
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    extends: [
      'digitalbazaar/vue3'
    ],
    rules: {
      'max-len': [
        'warn',
        {
          ignoreUrls: true
        }
      ]
    }
  }],
  plugins: [
    'unicorn'
  ]
};
