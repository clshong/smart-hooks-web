module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
		 "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh','prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		"no-undef":'off',
		"prettier/prettier": "warn", // 让 eslint 提示 prettier 错误格式的级别 warn | error
    "arrow-body-style": "off", // eslint-plugin-prettier 建议关闭，原因可查看文档说明
    "prefer-arrow-callback": "off",
  },
}
