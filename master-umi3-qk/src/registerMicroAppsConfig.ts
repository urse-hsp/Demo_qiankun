// 此处可以获取子应用是否加载成功,可以用来触发全局的loading
const loader = (loading: boolean) => {
  console.log('loading', loading);
};
// 微应用的名称 package.json => name 需要和主应用中注册时的 name 相对应，且必须确保唯一。
// activeRule应用路由路径
export const Microconfig = [
  {
    name: 'vue2',
    entry: '//localhost:8010',
    container: '#subContainer',
    activeRule: '/vue2',
    loader,
  },
  {
    name: 'reactjs',
    entry: '//localhost:8011',
    container: '#subContainer',
    activeRule: '/reactjs',
    loader,
  },
  {
    name: 'vue3-ts',
    entry: '//localhost:8012',
    container: '#subContainer',
    activeRule: '/vue3-ts',
    loader,
  },
  {
    name: 'react-ts',
    entry: '//localhost:8013',
    container: '#subContainer',
    activeRule: '/react-ts',
    loader,
  },
  {
    name: 'app-umi3',
    entry: '//localhost:8014',
    container: '#subContainer',
    activeRule: '/app-umi3',
    loader,
  },
];
