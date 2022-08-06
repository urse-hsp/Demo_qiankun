// 完整版routes数据  // 直接全替代换掉配置中的routes数据
export const _defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/home2',
        name: 'home',
        component: '@/pages/home',
      },
      {
        path: '/main2',
        name: 'main',
        component: '@/pages/main',
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
const route = [
  {
    path: '/main',
    name: 'main',
    component: '@/pages/main',
  },
  {
    path: '/home',
    name: 'home',
    component: '@/pages/home',
  },
  {
    path: '/Vue',
    name: 'Vue',
    routes: [
      {
        name: 'vue2',
        path: '/vue2',
      },
      {
        name: 'vue3',
        path: '/app-vue3',
      },
    ],
  },
  {
    path: '/React',
    name: 'React',
    routes: [
      {
        name: 'reactjs',
        path: '/reactjs',
      },
    ],
  },
];
// mock
export const mockData = () => {
  return new Promise((resolve, reject) => {
    const resData = {
      code: 0,
      data: route,
      msg: '成功',
      responseTime: new Date(),
    };
    const res: any = {
      ...resData,
      success: resData.code === 0,
      errorMessage: resData.msg,
    };

    let time: any = setTimeout(() => {
      resolve(res);
      clearTimeout(time);
      time = null;
    }, 1000);
  });
};
