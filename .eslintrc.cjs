const autoImport = require('./.eslintrc-auto-import.json')
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    // eslint-plugin-import 插件， @see https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    // eslint-config-airbnb-base 插件 已经改用 eslint-config-standard 插件
    'standard',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],

  plugins: [
    'vue',
    // 2. 加入 prettier 的 eslint 插件
    'prettier'
  ],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    // turn on errors for missing imports
    'import/no-unresolved': 'off',
    // 对后缀的检测，否则 import 一个ts文件也会报错，需要手动添加'.ts', 增加了下面的配置后就不用了
    'import/extensions': 'off',
    // 只允许1个默认导出，关闭，否则不能随意export xxx
    'import/prefer-default-export': ['off'],
    'no-console': ['off'],
    // 'no-unused-vars': ['off'],
    // 解决vite.config.js报错问题
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off'
  },
  globals: {
    $t: true,
    uni: true,
    UniApp: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    UniHelper: true,
    Page: true,
    App: true,
    NodeJS: true,
    ...autoImport.globals
  }
}
