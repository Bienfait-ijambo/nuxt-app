import { _ as _sfc_main$1 } from './Article-bofFAPZT.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as usePostStore } from './post-store-CVlcHHXM.mjs';
import { u as useAsyncData } from './asyncData-CXzAbtYr.mjs';
import { u as useState } from './state-C15HQ2wM.mjs';
import './nuxt-link-DrRfZxfN.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import './server.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';

const _sfc_main = {
  __name: "articles",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const postStore = usePostStore();
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => postStore.fetchData(), "$93cqLXQKHC")), __temp = await __temp, __restore(), __temp);
    const counter = useState("counter");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Article = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (_ctx.showHeader) {
        _push(`<h1>Custom Header for This Page - </h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><h1 class="text-2xl pl-2 text-indigo-500 mb-10">Articles - ${ssrInterpolate(unref(counter))}</h1>`);
      _push(ssrRenderComponent(_component_Article, {
        posts: (_a = unref(data)) == null ? void 0 : _a.data
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=articles-BW-iIYlr.mjs.map
