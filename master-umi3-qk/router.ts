// 存放组件
const constantRouterComponents = {
  WorkbenchDd: require('@/pages/index.jsx').default
}
 
import { SmileOutlined, HeartOutlined } from '@ant-design/icons'
// 菜单的icon
const IconMap = {
  dashboard: <SmileOutlined />,
  heart: <HeartOutlined />,
}
 
export const generateMenu = (item) => {
  const menu = {
    // 路由地址 动态拼接生成如 /dashboard/workplace
    path: item.path || '',
    // 路由名称，建议唯一
    name: item.title || '',
    // 控制路由是否显示在 sidebar
    hideInMenu: item.hidden,
    // 该路由对应页面的 组件
    component: constantRouterComponents[item.component] || null,
    // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
    icon: item.icon && IconMap[item.icon],
    
  }
  // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
  if (menu.path.indexOf('http') === -1) {
    menu.path = menu.path.replace('//', '/')
  }
  // 重定向
  item.redirect && (menu.redirect = item.redirect)
  // 隐藏子菜单
  item.hideChildrenInMenu && (menu.hideChildrenInMenu = item.hideChildrenInMenu)
  // 菜单跳转到外部地址时使用
  item.target && (menu.meta.target = item.target)
  // 嵌套外部链接url
  item.url && (menu.meta.url = item.url)
  return menu
}
 
export const generateRouter = (item) => {
  const router = {
    path: item.path,
    name: item.name,
    exact: true,
  };
  if (item.redirect) {
    router.redirect = item.redirect
  }
  router.component = constantRouterComponents[item.component]
  return router
}
export const getAsyncRouter = (asyncRouterMap) => {
  let Routers = []
  if (asyncRouterMap && asyncRouterMap.length > 0) {
    asyncRouterMap.forEach((item) => {
      if (item.children) {
        Routers.push(generateRouter(item))
        Routers = Routers.concat(getAsyncRouter(item.children))
      } else {
        Routers.push(generateRouter(item))
      }
    })
  }
  return Routers
}
 
export const getRouterMenu = (asyncRouterMap) => {
  let RouterMenus = []
  if (asyncRouterMap && asyncRouterMap.length > 0) {
    asyncRouterMap.forEach((item) => {
      const parent = generateMenu(item)
      let children = []
      if (item.children) {
        children = getRouterMenu(item.children)
      }
      if (children.length > 0) {
        parent.children = children
      }
      RouterMenus.push(parent)
    })
  }
  return RouterMenus
}