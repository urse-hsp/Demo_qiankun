import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8014', // html entry
        },
        // {
        //   name: 'app2', // 唯一 id
        //   entry: '//localhost:7002', // html entry
        // },
      ],
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/app1',
          microApp: 'app1',
        },
      ],
    },
  ],
  fastRefresh: {},
});
