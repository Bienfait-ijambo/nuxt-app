import { _ as __nuxt_component_0 } from './nuxt-link-DrRfZxfN.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useNuxtApp } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const loading = ref(false);
    ref({
      name: "ben",
      email: "ben@example.com",
      password: "password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div></div><div class="w-[300px] mt-20"><h1 class="text-2xl">Register</h1>`);
      if (unref(loading)) {
        _push(`<div class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="text" placeholder="E-mail" class="px-2 py-2 w-[100%] rounded-md mb-2 text-sm shadow-sm"><input type="text" placeholder="Password" class="px-2 py-2 w-[100%] mb-2 rounded-md text-sm shadow-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login ?`);
          } else {
            return [
              createTextVNode("Login ?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="text-white bg-indigo-500 rounded-md px-2 py-2 w-[100%] mt-4">Register</button></div><div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-bWJfcZ4z.mjs.map
