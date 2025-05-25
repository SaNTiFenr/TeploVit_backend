import { _ as _export_sfc, M as MtsImage } from "../ssr.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "vue-router";
const _sfc_main = {
  data() {
    return {
      images: {
        Mts: MtsImage
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Contacts_wrapper" }, _attrs))}><div class="main_wrapper"><div class="about_us_info"><div><p class="big_p"> Контакты </p></div><div class="info_t"><p> Компания &quot;ТеплоВит&quot; Республика Беларусь, 210040, г. Витебск, ул. Фрунзе д. 22 к.3 </p><p> Телефоны: </p><div class="number_wrapper"><img${ssrRenderAttr("src", $data.images.Mts)} alt=""><p>+ 375 33 613-01-08</p></div><div class="number_wrapper"><img${ssrRenderAttr("src", $data.images.Mts)} alt=""><p>+ 375 29 717-78-80</p></div><p> Электронная почта: <a href="mailto:teplo.vit@mail.ru">teplo.vit@mail.ru</a></p></div></div><div class="map_wrapper"><p class="map_wr_p"> Схема проезда </p><div style="${ssrRenderStyle({ "position": "relative", "overflow": "hidden" })}"><a href="https://yandex.by/maps/154/vitebsk/?utm_medium=mapframe&amp;utm_source=maps" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "0px" })}">Витебск</a><a href="https://yandex.by/maps/154/vitebsk/house/Z0kYdAVgTUEOQFtvfX5xeXtibA==/?ll=30.220909%2C55.208699&amp;utm_medium=mapframe&amp;utm_source=maps&amp;z=18.88" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "14px" })}">Улица Гагарина, 24 — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/?ll=30.220909%2C55.208699&amp;mode=whatshere&amp;whatshere%5Bpoint%5D=30.220180%2C55.208612&amp;whatshere%5Bzoom%5D=17&amp;z=18.88" width="560" height="400" frameborder="1" allowfullscreen="true" style="${ssrRenderStyle({ "position": "relative" })}"></iframe></div></div><div class="form-container"><p class="big_p">Форма обратной связи</p><form action="#" method="post"><div class="form-group"><label for="name">Имя:</label><input type="text" id="name" name="name" required></div><div class="form-group"><label for="email">Email:</label><input type="email" id="email" name="email" required></div><div class="form-group"><label for="message">Сообщение:</label><textarea id="message" name="message" rows="4" required></textarea></div><button type="submit" class="form_button">Отправить</button></form></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/ContactsView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContactsView as default
};
