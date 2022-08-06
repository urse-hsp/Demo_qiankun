import { SettingDrawer } from '@ant-design/pro-components';
import { dynamic } from 'umi';
import { mockData } from './_defaultProps';
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';
import { Microconfig } from '@/registerMicroAppsConfig';
/**
 * 注册微应用
 */
registerMicroApps(Microconfig);

/**
 * 启动 qiankun
 */
start({
  prefetch: true, // 开启预加载
  sandbox: {
    experimentalStyleIsolation: true, //   开启沙箱严格模式,实验性方案
  },
});

// 路由请求
const loopMenuItem = () => {
  return new Promise((resolve) => {
    mockData()
      .then((res: any) => {
        resolve(parseRoutes(res.data));
      })
      .catch((err) => []);
  });
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: any = ({ initialState, setInitialState }: any) => {
  return {
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    // loading: true,
    onPageChange: () => {
      // 页面切换时触发
      console.log('onPageChange');
      // const { location } = history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    // menu: {
    //   request: async () => await loopMenuItem(),
    // },
    // 增加一个 loading 的状态
    childrenRender: (children: any, props: any) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          <div id="subContainer"></div>
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

// 动态加载组件
const dynamics = (component: string) => {
  return dynamic({
    loader: async function () {
      // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
      const { default: View } = await import(
        /* webpackChunkName: "external_A" */ `${
          component.slice(0, 1) === '@'
            ? component.replace(/@/, '.')
            : component
        }`
      );
      return View;
    },
  });
};

// 递归处理路由
const parseRoutes = (authRoutes: any[]) => {
  if (authRoutes.length) {
    const list: any[] = authRoutes.map((item: any) => {
      return {
        ...item,
        component: dynamics(item.component),
        routes: item.routes ? parseRoutes(item.routes) : [],
      };
    });
    return list;
  }
  return [];
};

// 菜单动态加载方式
let extraRoutes: any;
export function patchRoutes({ routes }: any) {
  if (extraRoutes && extraRoutes.length && routes && routes.length) {
    console.log(extraRoutes, 444);
    routes[0].routes.push(...extraRoutes);
  }
}
// render可以判断是否登录，最先执行的
export async function render(oldRender: any) {
  const list = await loopMenuItem();
  extraRoutes = list;
  oldRender();

  // // 渲染之前做权限校验，
  // fetch('/api/auth').then((auth) => {
  //   if (auth.isLogin) {
  //     oldRender();
  //   } else {
  //     history.push('/login');
  //     oldRender();
  //   }
  // });
}
