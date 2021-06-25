import Mock from 'mockjs'
// import './auth/auth'

// ajax拦截时间
Mock.setup({
  timeout: 1000
})

let configArr = []

// 使用webpack的require.context(directory, useSubdirectories, regExp) 遍历所有的mock文件
// directory: 表示检索的目录
// useSubdirectories: 表示是否检索子文件夹
// regExp: 匹配文件的正则表达式,一般是文件名
const files = require.context('./mockConfig', true, /\.js$/)
files.keys().forEach(key => {
  // 判断是否检测到index.js mock配置文件，检测到则返回不进行配置
  if (key === './index.js') return
  configArr = configArr.concat(files(key).default)
})

// 注册所有的mock服务
configArr.forEach(item => {
  // Object.entries不能识别 undefined和null
  for (let [key, value] of Object.entries(item)) {
    let protocol = key.split('|')
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], value)
  }
})
