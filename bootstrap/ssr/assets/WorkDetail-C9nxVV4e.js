import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "vue-router";
const _sfc_main = {
  props: ["id"],
  data() {
    return {
      work: null,
      loading: true,
      error: null
    };
  },
  async created() {
    var _a;
    try {
      const response = await axios.get(`/api/works/${this.id}`);
      if ((_a = response.data) == null ? void 0 : _a.data) {
        this.work = {
          id: response.data.data.id,
          title: response.data.data.title,
          imageUrl: response.data.data.imageUrl,
          fullDescription: response.data.data.fullDescription || "Нет описания"
          // Исправлено имя поля
        };
      }
    } catch (err) {
      this.error = "Ошибка загрузки данных";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "work-detail" }, _attrs))} data-v-ed424396>`);
  if ($data.loading) {
    _push(`<div data-v-ed424396>Загрузка...</div>`);
  } else if ($data.error) {
    _push(`<div class="error" data-v-ed424396>${ssrInterpolate($data.error)}</div>`);
  } else {
    _push(`<div class="content" data-v-ed424396><h1 class="title more_title" data-v-ed424396>${ssrInterpolate($data.work.title)}</h1><img${ssrRenderAttr("src", $data.work.imageUrl)}${ssrRenderAttr("alt", $data.work.title)} class="work-image" data-v-ed424396><div class="description description_title" data-v-ed424396>${ssrInterpolate($data.work.fullDescription)}</div></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/WorkDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WorkDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ed424396"]]);
export {
  WorkDetail as default
};
