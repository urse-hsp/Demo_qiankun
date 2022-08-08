import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  fastRefresh: {},
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
