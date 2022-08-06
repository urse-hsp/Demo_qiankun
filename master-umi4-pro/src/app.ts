import { registerMicroApps, start,  addGlobalUncaughtErrorHandler,
  initGlobalState,
  MicroAppStateActions, } from 'qiankun';

// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};


registerMicroApps([
  // {
  //   name: 'reactApp',
  //   entry: '//localhost:3000',
  //   container: '#container',
  //   activeRule: '/app-react',
  // },
  {
    name: 'react_root',
    entry: '//localhost:8003',
    container: '#container',
    activeRule: '/react_root',
  },
  // {
  //   name: 'angularApp',
  //   entry: '//localhost:4200',
  //   container: '#container',
  //   activeRule: '/app-angular',
  // },
]);
// 启动 qiankun
start({
  prefetch: true, // 开启预加载
  sandbox: {
    experimentalStyleIsolation: true, //   开启沙箱严格模式,实验性方案
  },
});



// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
  console.log('异常捕获', handler);
});
// // 全局状态
// const state = {
//   id: 'main_主应用',
// };
// const actions: MicroAppStateActions = initGlobalState(state);
// actions.onGlobalStateChange((state, prev) => {
//   // state: 变更后的状态; prev 变更前的状态
//   console.log(state, prev);
// });

// actions.setGlobalState({
//   id: 'main_主应用',
// });
