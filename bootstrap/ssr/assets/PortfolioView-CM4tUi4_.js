import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "vue-router";
const _sfc_main = {
  data() {
    return {
      hoveredCard: null,
      works: [],
      error: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get("/api/works");
      if (!response.data.data || !Array.isArray(response.data.data)) {
        throw new Error("Некорректная структура данных");
      }
      this.works = response.data.data.map((work) => ({
        id: work.id,
        title: work.title,
        description: work.description,
        image_url: work.imageUrl
        // Обратите внимание на imageUrl с большой буквы
      }));
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      this.works = [];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-page" }, _attrs))} data-v-4a4c3e70><div class="portfolio-header" data-v-4a4c3e70><h1 data-v-4a4c3e70>Наши выполненные работы</h1><div class="header-divider" data-v-4a4c3e70></div></div><div class="portfolio-grid" data-v-4a4c3e70><!--[-->`);
  ssrRenderList($data.works, (work) => {
    _push(`<div class="portfolio-card" data-v-4a4c3e70><div class="image-container" data-v-4a4c3e70><img${ssrRenderAttr("src", work.image_url)}${ssrRenderAttr("alt", work.title)} class="portfolio-image" data-v-4a4c3e70><div class="${ssrRenderClass([{ "active": $data.hoveredCard === work.id }, "image-overlay"])}" data-v-4a4c3e70></div></div><div class="card-content" data-v-4a4c3e70><h3 class="work-title" data-v-4a4c3e70>${ssrInterpolate(work.title)}</h3><p class="work-description" data-v-4a4c3e70>${ssrInterpolate(work.description)}</p>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: { name: "work-detail", params: { id: work.id } },
      style: { backgroundColor: $data.hoveredCard === work.id ? "#f35d22" : "#131d82" }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="details-button" data-v-4a4c3e70${_scopeId}> Подробнее </button>`);
        } else {
          return [
            createVNode("button", { class: "details-button" }, " Подробнее ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div><div class="load-more" data-v-4a4c3e70><button class="load-button" data-v-4a4c3e70>Показать еще</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/PortfolioView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a4c3e70"]]);
export {
  PortfolioView as default
};
