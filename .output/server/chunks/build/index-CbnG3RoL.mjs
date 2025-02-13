import { _ as _sfc_main$1 } from './Article-bofFAPZT.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as usePostStore } from './post-store-CVlcHHXM.mjs';
import { u as useAsyncData } from './asyncData-CXzAbtYr.mjs';
import { b as useRouter } from './server.mjs';
import './nuxt-link-DrRfZxfN.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref([
      {
        title: "title-1",
        post_content: "content-1"
      },
      {
        title: "title-1",
        post_content: "content-1"
      }
    ]);
    const postStore = usePostStore();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => postStore.fetchData(), "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Article = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-10"><h1>welcome to wizard engineer</h1></div><div><h1 class="text-2xl text-indigo-500">Articles</h1>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CbnG3RoL.mjs.map
