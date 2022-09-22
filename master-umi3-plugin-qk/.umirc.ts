import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      prefetch: false,
      apps: [
        // {
        //   name: 'app1', // 唯一 id
        //   entry: '//localhost:7001', // html entry
        // },
        // {
        //   name: 'app2', // 唯一 id
        //   entry: '//localhost:7002', // html entry
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
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        {
          path: '/app1',
          component: './app1/index.js',
          routes: [
            {
              path: '/app1/user',
              component: './app1/user/index.js',
            },
          ],
        },
        {
          path: '/',
          component: './index.js',
        },
      ],
    },
    // name菜单的name 控制显示在菜单上 同步title。title标题。redirect重定向。exact
    // {
    //   path: '/user',
    //   layout: false,
    //   component: '@/pages/login',
    //   routes: [
    //     {
    //       name: 'login',
    //       path: '/user/login',
    //       component: '@/pages/login',
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   layout: true,
    //   name: '主应用',
    //   routes: [
    //     {
    //       extract: true,
    //       path: '/',
    //       redirect: '/main/demo2',
    //     },
    //     {
    //       path: '/main/demo1',
    //       component: '@/pages/main/demo1',
    //       name: '主应用1',
    //     },
    //     {
    //       path: '/main/demo2',
    //       component: '@/pages/main/demo2',
    //       name: '主应用2',
    //     },
    //   ],
    // },
  ],
});
