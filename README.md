# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#### stylelint

```
pnpm i stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order stylelint-config-css-modules -D

```
stylelint: css 样式校验的基础插件
stylelint-config-standard: stylelint 推荐的 css 校验规则
stylelint-order: css 排序，可自定义 css 排序规则
stylelint-config-recess-order: 现成的 css 排序规则，不用再去手写，与之相似的还有一个 stylelint-config-idiomatic-order，但是相对来说，recess-order 更符合开发人员的 css 书写顺序
stylelint-config-css-modules: 识别 css module 的样式（vue 可忽略）
