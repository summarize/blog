module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDiretory: 'es', style: true } // 按需加载组件代码和样式的 babel 插件, 如果需要自定义主题，此处style：true，需要自定义主题看下面描述
    ]
  ]
}
