// 此处可以获取子应用是否加载成功,可以用来触发全局的loading
const loader = (loading: boolean) => {
  console.log('loading', loading);
};
// 微应用的名称 package.json => name 需要和主应用中注册时的 name 相对应，且必须确保唯一。
// activeRule应用路由路径
export const Microconfig = [
  {
    name: 'vue2',
    entry: 'http://localhost:8010',
    container: '#subContainer',
    activeRule: '/vue2',
    loader,
  },
  {
    name: 'reactjs',
    entry: 'http://localhost:8011/',
    container: '#subContainer',
    activeRule: '/reactjs',
    loader,
  },
  {
    name: 'vue3-ts',
    entry: 'http://localhost:8012/',
    container: '#subContainer',
    activeRule: '/vue3-ts',
    loader,
  },
];
