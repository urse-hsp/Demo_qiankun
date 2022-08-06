// 此处可以获取子应用是否加载成功,可以用来触发全局的loading
const loader = (loading: boolean) => {
  console.log('loading', loading);
};

export const Microconfig = [
  // {
  //   name: 'react',
  //   entry: 'http://localhost:8003',
  //   container: '#subContainer',
  //   activeRule: '/react',
  //   loader,
  // },
  {
    name: 'vue2',
    entry: 'http://localhost:8010',
    container: '#subContainer',
    activeRule: '/vue2',
    loader,
  },
];
