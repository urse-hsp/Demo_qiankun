import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// createApp(App).mount('#app')

let router = null
let instance = null
let history = null

function render(props = {}) {
  const { container } = props
  // history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? `${props.name}` : '/')
  // router = createRouter({
  //   history,
  //   routes,
  // })

  instance = createApp(App)
  // instance.use(router)
  // instance.use(store)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 创立
export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

function storeTest(props) {
  props.setGlobalState &&
    props.setGlobalState({
      id: `${props.name}_子应用`,
    })
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    )
}

// 加载
export async function mount(props) {
  storeTest(props)
  render(props)
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
  instance.config.globalProperties.$setGlobalState = props.setGlobalState
}

// 卸载
export async function unmount() {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
  history.destroy()
}
