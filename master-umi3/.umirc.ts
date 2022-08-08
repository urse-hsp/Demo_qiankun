import { defineConfig } from 'umi';

export default defineConfig({
  fastRefresh: {},
  mfsu: {},
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  layout: {
    locale: true,
    siderWidth: 208,
    // ...defaultSettings,
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
