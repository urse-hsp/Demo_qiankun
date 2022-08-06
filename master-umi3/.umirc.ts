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
    {
      path: '/login',
      title: '登录',
      layout: false,
      component: '@/pages/login',
      // routes: [
      //   {
      //     name: 'login',
      //     path: '/user/login',
      //     component: '@/pages/user/login',
      //   },
      // ],
    },
  ],
});
