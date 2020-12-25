import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f4d2d0c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _274dc914 = () => interopDefault(import('..\\pages\\metadata\\index.vue' /* webpackChunkName: "pages/metadata/index" */))
const _02df1704 = () => interopDefault(import('..\\pages\\SelectServer.vue' /* webpackChunkName: "pages/SelectServer" */))
const _5e8227a0 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _e79a7cb6 = () => interopDefault(import('..\\pages\\settings\\logsAndActivity.vue' /* webpackChunkName: "pages/settings/logsAndActivity" */))
const _c999e2ea = () => interopDefault(import('..\\pages\\artist\\_itemId\\index.vue' /* webpackChunkName: "pages/artist/_itemId/index" */))
const _21aeb0ce = () => interopDefault(import('..\\pages\\genre\\_itemId\\index.vue' /* webpackChunkName: "pages/genre/_itemId/index" */))
const _c79e2bd2 = () => interopDefault(import('..\\pages\\item\\_itemId\\index.vue' /* webpackChunkName: "pages/item/_itemId/index" */))
const _7c38b63a = () => interopDefault(import('..\\pages\\library\\_viewId.vue' /* webpackChunkName: "pages/library/_viewId" */))
const _ee8990ce = () => interopDefault(import('..\\pages\\person\\_itemId\\index.vue' /* webpackChunkName: "pages/person/_itemId/index" */))
const _e16edb02 = () => interopDefault(import('..\\pages\\item\\_itemId\\play.vue' /* webpackChunkName: "pages/item/_itemId/play" */))
const _329c733a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _9f4d2d0c,
    name: "login"
  }, {
    path: "/metadata",
    component: _274dc914,
    name: "metadata"
  }, {
    path: "/SelectServer",
    component: _02df1704,
    name: "SelectServer"
  }, {
    path: "/settings",
    component: _5e8227a0,
    name: "settings"
  }, {
    path: "/settings/logsAndActivity",
    component: _e79a7cb6,
    name: "settings-logsAndActivity"
  }, {
    path: "/artist/:itemId",
    component: _c999e2ea,
    name: "artist-itemId"
  }, {
    path: "/genre/:itemId",
    component: _21aeb0ce,
    name: "genre-itemId"
  }, {
    path: "/item/:itemId",
    component: _c79e2bd2,
    name: "item-itemId"
  }, {
    path: "/library/:viewId?",
    component: _7c38b63a,
    name: "library-viewId"
  }, {
    path: "/person/:itemId",
    component: _ee8990ce,
    name: "person-itemId"
  }, {
    path: "/item/:itemId?/play",
    component: _e16edb02,
    name: "item-itemId-play"
  }, {
    path: "/",
    component: _329c733a,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
