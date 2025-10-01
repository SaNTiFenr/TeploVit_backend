import axios from "axios";
import { _ as _export_sfc, M as MtsImage } from "../ssr.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "vue-router";
const _sfc_main = {
  data() {
    return {
      images: { Mts: MtsImage },
      form: {
        name: "",
        email: "",
        message: ""
      },
      errors: {},
      successMessage: ""
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.form.name.trim()) {
        this.errors.name = "Пожалуйста, введите ваше имя";
      }
      if (!this.form.email.trim()) {
        this.errors.email = "Пожалуйста, введите ваш email";
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = "Пожалуйста, введите корректный email";
      }
      if (!this.form.message.trim()) {
        this.errors.message = "Пожалуйста, введите сообщение";
      }
      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async submitForm() {
      if (!this.validateForm()) return;
      try {
        const response = await axios.post("/api/contact", {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        });
        this.successMessage = "Сообщение успешно отправлено!";
        this.form = { name: "", email: "", message: "" };
        setTimeout(() => this.successMessage = "", 3e3);
      } catch (error) {
        this.successMessage = "Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.";
        console.error("Ошибка отправки:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Contacts_wrapper" }, _attrs))} data-v-2256ad85><div class="main_wrapper" data-v-2256ad85><div class="about_us_info" data-v-2256ad85><div data-v-2256ad85><p class="big_p" data-v-2256ad85> Контакты </p></div><div class="info_t" data-v-2256ad85><p data-v-2256ad85> Компания &quot;ТеплоВит&quot; Республика Беларусь, 210040, г. Витебск, ул. Фрунзе д. 22 к.3 </p><p data-v-2256ad85> Телефоны: </p><div class="number_wrapper" data-v-2256ad85><img${ssrRenderAttr("src", $data.images.Mts)} alt="" data-v-2256ad85><p data-v-2256ad85>+ 375 33 613-01-08</p></div><div class="number_wrapper" data-v-2256ad85><img${ssrRenderAttr("src", $data.images.Mts)} alt="" data-v-2256ad85><p data-v-2256ad85>+ 375 29 717-78-80</p></div><p data-v-2256ad85> Электронная почта: <a href="mailto:teplo.vit@mail.ru" data-v-2256ad85>teplo.vit@mail.ru</a></p></div></div><div class="map_wrapper" data-v-2256ad85><p class="map_wr_p" data-v-2256ad85> Схема проезда </p><div style="${ssrRenderStyle({ "position": "relative", "overflow": "hidden" })}" data-v-2256ad85><a href="https://yandex.by/maps/154/vitebsk/?utm_medium=mapframe&amp;utm_source=maps" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "0px" })}" data-v-2256ad85>Витебск</a><a href="https://yandex.by/maps/154/vitebsk/house/Z0kYdAVgTUEOQFtvfX5xeXtibA==/?ll=30.220909%2C55.208699&amp;utm_medium=mapframe&amp;utm_source=maps&amp;z=18.88" style="${ssrRenderStyle({ "color": "#eee", "font-size": "12px", "position": "absolute", "top": "14px" })}" data-v-2256ad85>Улица Гагарина, 24 — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/?ll=30.220909%2C55.208699&amp;mode=whatshere&amp;whatshere%5Bpoint%5D=30.220180%2C55.208612&amp;whatshere%5Bzoom%5D=17&amp;z=18.88" width="560" height="400" frameborder="1" allowfullscreen="true" style="${ssrRenderStyle({ "position": "relative" })}" data-v-2256ad85></iframe></div></div><div class="form-container" data-v-2256ad85><p class="big_p" data-v-2256ad85>Форма обратной связи</p><form data-v-2256ad85><div class="form-group" data-v-2256ad85><label for="name" data-v-2256ad85>Имя:</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} class="${ssrRenderClass({ "error": $data.errors.name })}" data-v-2256ad85>`);
  if ($data.errors.name) {
    _push(`<span class="error-message" data-v-2256ad85>${ssrInterpolate($data.errors.name)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-2256ad85><label for="email" data-v-2256ad85>Email:</label><input type="email" id="email"${ssrRenderAttr("value", $data.form.email)} class="${ssrRenderClass({ "error": $data.errors.email })}" data-v-2256ad85>`);
  if ($data.errors.email) {
    _push(`<span class="error-message" data-v-2256ad85>${ssrInterpolate($data.errors.email)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-2256ad85><label for="message" data-v-2256ad85>Сообщение:</label><textarea id="message" rows="4" class="${ssrRenderClass({ "error": $data.errors.message })}" data-v-2256ad85>${ssrInterpolate($data.form.message)}</textarea>`);
  if ($data.errors.message) {
    _push(`<span class="error-message" data-v-2256ad85>${ssrInterpolate($data.errors.message)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><button type="submit" class="form_button" data-v-2256ad85>Отправить</button>`);
  if ($data.successMessage) {
    _push(`<div class="success-message" data-v-2256ad85>${ssrInterpolate($data.successMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/ContactsView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2256ad85"]]);
export {
  ContactsView as default
};
