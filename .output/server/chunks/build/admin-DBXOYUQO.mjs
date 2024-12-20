import { _ as __nuxt_component_0 } from './nuxt-link-DrRfZxfN.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/dashboard" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Dashboard `);
      } else {
        return [
          createTextVNode(" Dashboard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create post `);
      } else {
        return [
          createTextVNode(" Create post ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div style="${ssrRenderStyle({ "background-color": "aqua" })}">this is footer</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { admin as default };
//# sourceMappingURL=admin-DBXOYUQO.mjs.map
