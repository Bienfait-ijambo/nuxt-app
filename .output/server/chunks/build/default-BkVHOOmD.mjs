import { f as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DrRfZxfN.mjs';
import __nuxt_component_1 from './index-DE8Q7_QI.mjs';
import { defineComponent, h, mergeProps, withCtx, createTextVNode, useSSRContext, ref, computed } from 'vue';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import './asyncData-CXzAbtYr.mjs';
import 'pinia';
import 'unhead';
import 'vue-router';

function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = () => {
    error.value = false;
    set(0);
  };
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_2 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _imports_0 = "" + buildAssetsURL("logo.DzccvLU-.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_1;
  const _component_NuxtLoadingIndicator = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-200 h-screen" }, _attrs))}><div class="pt-10 ml-20 mr-20"><div class="flex justify-between bg-white shadow-md rounded-md p-2"><div class="pl-5"><img class="w-10"${ssrRenderAttr("src", _imports_0)} alt=""></div><ul class="flex gap-2"><li class="bg-indigo-500 text-white rounded-md px-2 py-2 cursor-pointer">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hover:bg-indigo-500 hover:text-white text-gray-700 rounded-md px-2 py-2 cursor-pointer">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/articles" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Articles`);
      } else {
        return [
          createTextVNode("Articles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hover:bg-indigo-500 hover:text-white text-gray-700 rounded-md px-2 py-2 cursor-pointer"><a href="/blog/test">Test</a></li><li class="hover:bg-indigo-500 hover:text-white text-gray-700 rounded-md px-2 py-2 cursor-pointer"><a href="/auth/register">Register</a></li><button class="pt-1 px-2 hover:bg-slate-200 rounded-full">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "circum:dark",
    style: { "color": "black" }
  }, null, _parent));
  _push(`</button></ul></div><div class="mt-10">`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, {
    color: "#348feb",
    height: 10
  }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BkVHOOmD.mjs.map
