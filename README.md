# 微应用的名称 package.json => name 需要和主应用中注册时的 name 相对应，且必须确保唯一。

<!-- qiankuun  -->

# React react-scripts@5.0.1运行错误 导致项目无法启动 安装的react-scripts@4.0.3 版本

# Vue vue-router@4.x 运行错误，导致项目无法启动 安装的@3.5.2 版本

# 子应用注册 qiankun外插件注册方式
{
  name: 'reactjs', // 对应子应用 package > name
  entry: 'http://localhost:8011/', // 子应用地址
  container: '#subContainer', // 主应用模板 id
  activeRule: '/react1', // 应用注册对应 主应用的路由
  loader,
},

主应用路由 path 需要跟 qiankun 中注册的 name,activeRule 三者需要一致

# master-umi3 qiankun 插件形式实现

# master-umi4-pro umi 内部 qiankun 插件实现

1、子应用 umi 下载插件后，一键可开启配置
2、umi 开启微前端 qiankun.master 注册子应用。qiankun.slave 开启微服务，需要配置 package.name
3、umi 路由配置中添加 microApp 属性



给子应用传递数据
1 url： 子应用获取 url 后的参数
2 本地缓存: 用父子应用，子应的本地缓存使用的是主应用的。嵌套级应用缓存都是主应用的。
3 父子应用通讯
    1 配合 useModel 确保已安装 @umijs/plugin-model 或 @umijs/preset-react
    路由绑定式消费微应用（字应用更改主应用变量，给子应用调用修改state的方法，传参和实现可以自定义）
      1 umi app.ts中 配置useQiankunStateForSlave 
        子应用通过useModel （微应用中会自动生成一个全局 model，进行解析，可以在任意组件中获取主应用透传的 props 的值。）
        通过高阶组件 connectMaster 来获取主应用透传的 props，直接在props中接收
    2 基于 props 传递: 类似 react 中组件间通信的方案
      主应用中配置 apps 注册 时以 配置props 将数据传递下去（参考主应用运行时配置一节）
      子应用在生命周期钩子中获取 props 消费数据（参考子应用运行时配置一节）
      注册子应用时配置传递的paops参数，子应用是通过qiankun的周期props接手（不限框架）
    3 MicroApp 占位视图显示子应用， 传参跟组件一样传递进行


umi主应用，umi子应用MicroApp可以指定模块显示子应用内容
不需要统一子应用里package.name名字
路由绑定的方式 1写入配置路由中 2app.ts 动态覆盖qiankun 方法返回数据