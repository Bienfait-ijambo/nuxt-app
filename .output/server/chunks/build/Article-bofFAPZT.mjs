import { _ as __nuxt_component_0 } from './nuxt-link-DrRfZxfN.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Article",
  __ssrInlineRender: true,
  props: ["posts"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-2 p-2" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        var _a;
        _push(`<div class="bg-white rounded-md shadow-md p-2"><img${ssrRenderAttr("src", post == null ? void 0 : post.image)} class="w-20" alt="logo"><h1 class="text-2xl mb-2">${ssrInterpolate(post == null ? void 0 : post.title)}</h1><div class="mb-2">${(_a = post == null ? void 0 : post.post_content) != null ? _a : ""}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/" + (post == null ? void 0 : post.slug) + "x"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read more`);
            } else {
              return [
                createTextVNode("Read more")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Article-bofFAPZT.mjs.map
