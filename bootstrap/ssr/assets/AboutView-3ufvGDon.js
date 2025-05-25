import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "vue-router";
const _sfc_main = {
  data() {
    return {
      reasons: [
        {
          title: "Профессионализм",
          content: "Мы предлагаем исчерпывающие консультации опытных специалистов и грамотные рекомендации по составлению оптимального бюджета вашего проекта."
        },
        {
          title: "Эффективность",
          content: "Мы ценим деньги, время и силы наших покупателей, рекомендуя исключительно эффективные варианты решения задач."
        },
        {
          title: "Индивидуальный подход",
          content: "Мы внимательно относимся к каждому покупателю, индивидуально подбирая продукт, который максимально соответствует вашим требованиям."
        },
        {
          title: "Обязательность",
          content: "Мы четко выполняем взятые обязательства, соблюдая все условия, сроки и договоренности с клиентами."
        },
        {
          title: "Гибкие условия",
          content: "Наша работа основана на лояльном подходе, оперативности в решениях и гибкой ценовой политике."
        },
        {
          title: "Гарантии",
          content: "На всю продукцию производитель предоставляет гарантию качества. Мы всегда поддерживаем своих заказчиков."
        },
        {
          title: "Лучшие цены",
          content: "Мы заказываем продукцию напрямую у производителей, что позволяет предлагать лучшие цены на рынке Беларуси."
        }
      ]
    };
  },
  methods: {
    headerStyle(index) {
      const colors = ["#131d82", "#f35d22"];
      return {
        backgroundColor: colors[index % 2]
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about_us" }, _attrs))}><div class="main_ab_us_wrapper"><div class="about-container"><div class="about-header"><h1>О компании</h1><div class="header-line"></div></div><div class="about-content"><div class="company-description"><p class="intro-text"> Компания «ТеплоВит» предлагает современные инженерные решения и услуги по профессиональной комплектации объектов различным оборудованием для систем водоснабжения и отопления. </p><div class="highlight-box"><p>Мы специализируемся на комплексных поставках качественного оборудования, которое поступает непосредственно со склада завода-изготовителя, что гарантирует качество и хорошую цену.</p></div></div><div class="reasons-section"><h2>7 причин работать с компанией «ТеплоВит»</h2><div class="reasons-grid"><!--[-->`);
  ssrRenderList($data.reasons, (reason, index) => {
    _push(`<div class="reason-card"><div class="reason-header" style="${ssrRenderStyle($options.headerStyle(index))}">${ssrInterpolate(reason.title)}</div><div class="reason-content">${ssrInterpolate(reason.content)}</div></div>`);
  });
  _push(`<!--]--></div></div><div class="conclusion-section"><p class="conclusion-text"> Обращайтесь к нам, и мы принесем тепло и уют в Ваши дома! </p><div class="contact-button">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/contacts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Связаться с нами`);
      } else {
        return [
          createTextVNode("Связаться с нами")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/AboutView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AboutView as default
};
