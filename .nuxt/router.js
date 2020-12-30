import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _21129214 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _629528e0 = () => interopDefault(import('..\\pages\\metadata\\index.vue' /* webpackChunkName: "pages/metadata/index" */))
const _00644382 = () => interopDefault(import('..\\pages\\SelectServer.vue' /* webpackChunkName: "pages/SelectServer" */))
const _05e9ca1c = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _36be7921 = () => interopDefault(import('..\\pages\\settings\\logsAndActivity.vue' /* webpackChunkName: "pages/settings/logsAndActivity" */))
const _1d3a2ee2 = () => interopDefault(import('..\\pages\\artist\\_itemId\\index.vue' /* webpackChunkName: "pages/artist/_itemId/index" */))
const _7e537d15 = () => interopDefault(import('..\\pages\\genre\\_itemId\\index.vue' /* webpackChunkName: "pages/genre/_itemId/index" */))
const _7c5115ca = () => interopDefault(import('..\\pages\\item\\_itemId\\index.vue' /* webpackChunkName: "pages/item/_itemId/index" */))
const _077051e7 = () => interopDefault(import('..\\pages\\library\\_viewId.vue' /* webpackChunkName: "pages/library/_viewId" */))
const _4229dcc6 = () => interopDefault(import('..\\pages\\person\\_itemId\\index.vue' /* webpackChunkName: "pages/person/_itemId/index" */))
const _1ce296fb = () => interopDefault(import('..\\pages\\item\\_itemId\\play.vue' /* webpackChunkName: "pages/item/_itemId/play" */))
const _25cf13df = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _21129214,
    name: "login"
  }, {
    path: "/metadata",
    component: _629528e0,
    name: "metadata"
  }, {
    path: "/SelectServer",
    component: _00644382,
    name: "SelectServer"
  }, {
    path: "/settings",
    component: _05e9ca1c,
    name: "settings"
  }, {
    path: "/settings/logsAndActivity",
    component: _36be7921,
    name: "settings-logsAndActivity"
  }, {
    path: "/artist/:itemId",
    component: _1d3a2ee2,
    name: "artist-itemId"
  }, {
    path: "/genre/:itemId",
    component: _7e537d15,
    name: "genre-itemId"
  }, {
    path: "/item/:itemId",
    component: _7c5115ca,
    name: "item-itemId"
  }, {
    path: "/library/:viewId?",
    component: _077051e7,
    name: "library-viewId"
  }, {
    path: "/person/:itemId",
    component: _4229dcc6,
    name: "person-itemId"
  }, {
    path: "/item/:itemId?/play",
    component: _1ce296fb,
    name: "item-itemId-play"
  }, {
    path: "/",
    component: _25cf13df,
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
