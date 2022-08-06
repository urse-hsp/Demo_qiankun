# 微应用的名称 package.json => name 需要和主应用中注册时的 name 相对应，且必须确保唯一。

<!-- qiankuun  -->

# React react-scripts@5.0.1运行错误 导致项目无法启动 安装的@4.0.3 版本

# Vue vue-router@4.x 运行错误，导致项目无法启动 安装的@3.5.2 版本

# 子应用注册

{
name: 'reactjs', // 对应子应用 package > name
entry: 'http://localhost:8011/', // 子应用地址
container: '#subContainer', // 主应用模板 id
activeRule: '/react1', // 应用注册对应 主应用的路由
loader,
},
