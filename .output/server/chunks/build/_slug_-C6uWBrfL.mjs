import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import { u as usePostStore } from './post-store-CVlcHHXM.mjs';
import { u as useAsyncData } from './asyncData-CXzAbtYr.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const slug = (_a = route.params) == null ? void 0 : _a.slug;
    const postStore = usePostStore();
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => postStore.singlePost(slug), "$qFggIq0u6c")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div><h1 class="text-2xl pl-2 text-indigo-500 mb-10">Articles- ${ssrInterpolate(unref(slug))}</h1> ${ssrInterpolate(unref(data).length)} <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-2"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-C6uWBrfL.mjs.map
