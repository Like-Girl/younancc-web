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
    // "off"或者0，不启用这个规则
    // "warn"或者1，出现问题会有警告
    // "error"或者2,出现问题会报错
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //是否强制一致的缩进风格
    'indent': 'off',
    //是否允许未声明的变量
    "no-undef": 'off',
    //是否允许初始化变量时给变量赋值undefined
    "no-undef-init": 2,
    //是否允许把undefined当做标识符使用
    "no-undefined": 2,
    //是否允许有声明后未使用的变量或者参数
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
    //是否允许在未定义之前就使用变量
    "no-use-before-define": [2, "nofunc"],
  }
}
