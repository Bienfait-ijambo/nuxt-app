import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useState } from './state-C15HQ2wM.mjs';
import './server.mjs';
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
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = useState("counter", () => 0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>Returned JSON:</div><div>${ssrInterpolate(_ctx.data)} - ${ssrInterpolate(unref(counter))}</div><button>Increment</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-CpxphC8B.mjs.map
