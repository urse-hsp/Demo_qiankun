import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        // {
        //   name: 'vue2',
        //   entry: '//localhost:8010',
        // },
        // {
        //   name: 'reactjs',
        //   entry: '//localhost:8011',
        // },
        {
          name: 'vue3-ts',
          entry: 'http://localhost:8012',
          container: '#subContainer',
          activeRule: '/vue3-ts',
        },
        // {
        //   name: 'react-ts',
        //   entry: '//localhost:8013',
        // },
        // {
        //   name: 'app-umi3',
        //   entry: '//localhost:8014',
        // },
      ],
    },
  },
  fastRefresh: {},
  mfsu: {},
  layout: {
    locale: true,
    siderWidth: 110,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // name菜单的name 控制显示在菜单上 同步title。title标题。redirect重定向。exact
    {
      path: '/user',
      layout: false,
      component: '@/pages/login',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: '@/pages/login',
        },
      ],
    },
    {
      path: '/',
      layout: true,
      name: '主应用',
      routes: [
        {
          extract: true,
          path: '/',
          redirect: '/main/demo2',
        },
        {
          path: '/main/demo1',
          component: '@/pages/main/demo1',
          name: '主应用1',
        },
        {
          path: '/main/demo2',
          component: '@/pages/main/demo2',
          name: '主应用2',
        },
      ],
    },
  ],
});
