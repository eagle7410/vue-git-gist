// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    "camelcase" : 0,
    "no-tabs" : 0,
    "no-mixed-spaces-and-tabs" : 0,
    "no-extend-native" : 0,
    "no-debugger": 0,
    "padded-blocks": 0,
    "no-multiple-empty-lines": "warn",
    "no-multi-spaces" : 0,
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-trailing-spaces" : 0,
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "no-return-await" : 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "key-spacing": 0,
    "spaced-comment": 0,
    "space-in-parens" : 0,
    "quotes" : "warn",
    "semi": 0,
    "indent": 0,
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "no-constant-condition" : 0
  }
}
