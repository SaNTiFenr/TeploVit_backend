import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, toDisplayString, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, renderToString } from "vue/server-renderer";
import { createMemoryHistory, createWebHistory, createRouter } from "vue-router";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  name: "HomeView",
  data() {
    return {
      advantages: [
        "Низкая стоимость установки",
        "Доступность топлива",
        "Компактность и простота эксплуатации",
        "Автоматизация и автономная работа"
      ],
      importantNotes: [
        "Функция дистанционного управления (термостаты, умная автоматика)",
        "Возможность удаленного контроля для повышения энергоэффективности"
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Main_info_wrapper" }, _attrs))}><div class="Main_info"><div class="Main_Bg_Img"><div class="Main_Bg_p"><p>Компания «ТеплоВит» может обеспечить выполнение проекта любой сложности.</p></div><div class="Main_Bg_desc"><p>Мы предлагаем лучшие цены в Белоруссии на комплекс услуг по поставке и монтажу инженерного оборудования.</p><p>Компания гарантирует качество и надежность системы, а так же снижение затрат и существенную экономию Вашего бюджета на строительство.</p></div><div class="Main_Bg_button">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="button orange"${_scopeId}>Узнать больше</button>`);
      } else {
        return [
          createVNode("button", { class: "button orange" }, "Узнать больше")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, { to: "/contacts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="button blue"${_scopeId}>Контакты</button>`);
      } else {
        return [
          createVNode("button", { class: "button blue" }, "Контакты")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="Beige_div"><p> При выборе компании ТеплоВит вы можете расчитывать на следующее: </p></div><div class="Orange_div svg_wrapper"><div class="advantages_svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.5 100.5" style="${ssrRenderStyle({ "enable-background": "new 0 0 100.5 100.5" })}" xml:space="preserve"><path d="M98.595,73.585L61.402,36.392l12.134-12.136c0.281-0.281,0.439-0.663,0.439-1.061s-0.158-0.779-0.439-1.061l-6.961-6.958
                            c-0.333-0.333-0.807-0.491-1.27-0.425l-11.92,1.678c-0.322,0.045-0.621,0.194-0.852,0.425l-5.334,5.334l-4.376-4.374
                            c-0.586-0.586-1.535-0.586-2.121,0l-9.115,9.118c-0.586,0.586-0.586,1.535,0,2.121l4.374,4.373L23.825,45.562
                            c-0.281,0.281-0.439,0.663-0.439,1.061s0.158,0.779,0.439,1.061l12.084,12.082c0.293,0.293,0.677,0.439,1.061,0.439
                            s0.768-0.146,1.061-0.439l12.131-12.133l37.193,37.191c0.293,0.293,0.677,0.439,1.061,0.439s0.768-0.146,1.061-0.439l9.118-9.118
                            C99.181,75.12,99.181,74.171,98.595,73.585z M34.77,27.993l6.994-6.997l3.315,3.314l-6.996,6.996L34.77,27.993z M36.971,56.584
                            l-9.963-9.961L54.301,19.33l10.683-1.503l5.371,5.368L58.226,35.326c-0.002,0.002-0.004,0.002-0.005,0.003s-0.002,0.004-0.004,0.005
                            L36.971,56.584z M88.416,81.643L52.283,45.512l6.998-6.999l36.132,36.133L88.416,81.643z"></path><path d="M15.462,54.879c-0.155-0.813-0.938-1.348-1.754-1.193L2.186,55.877c-0.813,0.155-1.348,0.94-1.193,1.754
                            c0.137,0.719,0.766,1.22,1.472,1.22c0.093,0,0.188-0.009,0.282-0.026l11.522-2.191C15.082,56.478,15.616,55.693,15.462,54.879z"></path><path d="M20.766,63.844l-8.286,8.263c-0.586,0.585-0.588,1.535-0.003,2.122c0.293,0.294,0.678,0.44,1.062,0.44
                            c0.383,0,0.767-0.146,1.06-0.438l8.286-8.263c0.586-0.585,0.588-1.535,0.003-2.122C22.303,63.261,21.353,63.258,20.766,63.844z"></path><path d="M32.354,69.638c-0.823-0.124-1.583,0.444-1.704,1.263l-1.669,11.223c-0.122,0.819,0.443,1.583,1.263,1.704
                            c0.075,0.012,0.149,0.017,0.223,0.017c0.73,0,1.371-0.535,1.481-1.279l1.669-11.223C33.738,70.523,33.173,69.759,32.354,69.638z"></path></svg><p>Опыт работы</p></div><div class="advantages_svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.354 100.352" style="${ssrRenderStyle({ "enable-background": "new 0 0 100.354 100.352" })}" xml:space="preserve"><path d="M94.384,49.638h-7.759V36.544c0-0.829-0.672-1.5-1.5-1.5H60.824V21.977c0-0.829-0.672-1.5-1.5-1.5H5.618
                                c-0.829,0-1.5,0.671-1.5,1.5v49.185c0,0.828,0.671,1.5,1.5,1.5h12.538c0.52,3.867,3.832,6.861,7.838,6.861s7.318-2.994,7.838-6.861
                                h25.492h9.686c0.52,3.867,3.834,6.861,7.844,6.861s7.324-2.994,7.845-6.861h9.686c0.828,0,1.5-0.672,1.5-1.5V51.138
                                C95.884,50.309,95.212,49.638,94.384,49.638z M25.994,76.523c-2.711,0-4.917-2.207-4.917-4.92s2.206-4.92,4.917-4.92
                                s4.917,2.207,4.917,4.92S28.706,76.523,25.994,76.523z M25.994,63.683c-3.695,0-6.797,2.549-7.666,5.979H7.118V23.477h50.706v13.067
                                v14.594v18.523H33.661C32.792,66.232,29.689,63.683,25.994,63.683z M76.854,76.523c-2.715,0-4.923-2.207-4.923-4.92
                                s2.208-4.92,4.923-4.92s4.924,2.207,4.924,4.92S79.568,76.523,76.854,76.523z M92.884,69.661h-8.357
                                c-0.87-3.43-3.975-5.979-7.673-5.979s-6.803,2.549-7.672,5.979h-8.357V51.138V38.044h22.801v13.094c0,0.828,0.672,1.5,1.5,1.5h7.759
                                V69.661z"></path></svg><p>Офицальные поставки</p></div><div class="advantages_svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="${ssrRenderStyle({ "enable-background": "new 0 0 100 100" })}" xml:space="preserve"><g><path d="M64.1,38.1l-30.2,24c-0.6,0.5-0.8,1.5-0.2,2.1c0.3,0.4,0.7,0.6,1.2,0.6c0.3,0,0.7-0.1,0.9-0.3l30.2-24
                                c0.6-0.5,0.8-1.5,0.2-2.1C65.7,37.7,64.8,37.6,64.1,38.1z"></path><path d="M42,48.8c0.4,0,0.8,0,1.2-0.1c4.1-0.6,7-4.5,6.3-8.7c-0.3-2-1.4-3.8-3-5c-1.6-1.2-3.6-1.7-5.6-1.4c-2,0.3-3.8,1.4-5,3
                                c-1.2,1.6-1.7,3.6-1.4,5.6C35.1,46.1,38.4,48.8,42,48.8z M41.3,36.7c0.2,0,0.5-0.1,0.7-0.1c2.2,0,4.2,1.6,4.5,3.9
                                c0.4,2.5-1.3,4.8-3.8,5.2c-2.5,0.4-4.8-1.3-5.2-3.8C37.1,39.4,38.9,37.1,41.3,36.7z"></path><path d="M58,53.8c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6s7.6-3.4,7.6-7.6C65.5,57.2,62.1,53.8,58,53.8z M58,65.9
                                c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6C62.5,63.9,60.5,65.9,58,65.9z"></path><path d="M95.4,50.3c0-0.1,0.1-0.3,0.1-0.4c0-4.3-4.5-6.5-8.4-8.4c-2.8-1.4-5.8-2.9-6.6-4.7c-0.8-1.9,0.3-5,1.4-7.9
                                c1.5-4.1,3-8.3,0.2-11.1c-2.8-2.8-6.8-1.8-10.8-0.9c-2.8,0.6-5.7,1.3-7.6,0.5c-1.9-0.8-3.5-3.3-5-5.7c-2.2-3.4-4.6-7.3-8.8-7.3
                                c-4.2,0-6.6,3.9-8.7,7.4c-1.5,2.5-3,5-4.9,5.8c-1.9,0.8-4.9,0.1-7.7-0.6c-4-1-8.1-2-10.8,0.7c-2.8,2.8-1.4,7-0.1,11.1
                                c1,3,1.9,6,1.1,8c-0.8,1.9-3.6,3.3-6.3,4.7c-3.8,2-8.1,4.2-8.1,8.4c0,0.1,0,0.3,0.1,0.4c0,0.1-0.1,0.3-0.1,0.4
                                c0,4.2,4.3,6.5,8.1,8.4c2.7,1.4,5.5,2.8,6.3,4.7c0.8,1.9-0.2,5-1.1,8c-1.3,4.1-2.7,8.3,0.1,11.1c2.8,2.8,6.9,1.7,10.8,0.7
                                c2.8-0.7,5.8-1.4,7.7-0.6c1.9,0.8,3.4,3.3,4.9,5.8c2.1,3.5,4.5,7.4,8.7,7.4c4.2,0,6.7-3.9,8.8-7.3c1.5-2.4,3.1-4.9,5-5.7
                                c2-0.8,4.8-0.2,7.6,0.5c3.9,0.9,8,1.9,10.8-0.9c2.8-2.8,1.3-7-0.2-11.1c-1.1-3-2.2-6-1.4-7.9c0.8-1.9,3.7-3.3,6.6-4.7
                                c3.9-2,8.4-4.2,8.4-8.4C95.5,50.5,95.4,50.4,95.4,50.3z M85.7,56.4c-3.3,1.7-6.8,3.4-8,6.3c-1.3,3,0.1,6.6,1.3,10.1
                                c1.2,3.3,2.4,6.5,0.9,7.9c-1.6,1.6-4.7,0.9-8,0.1c-3.3-0.8-6.6-1.5-9.5-0.3c-2.8,1.2-4.6,4-6.3,6.8c-1.9,3-3.7,5.9-6.3,5.9
                                c-2.5,0-4.3-2.9-6.2-6c-1.7-2.9-3.5-5.8-6.3-7c-2.9-1.2-6.3-0.4-9.6,0.5c-3.3,0.8-6.4,1.6-8,0.1c-1.5-1.5-0.5-4.7,0.6-8
                                c1.1-3.5,2.3-7.1,1-10c-1.2-2.9-4.5-4.6-7.7-6.2c-3.3-1.7-6.4-3.3-6.4-5.8c0-0.1,0-0.3-0.1-0.4c0-0.1,0.1-0.3,0.1-0.4
                                c0-2.4,3.1-4,6.4-5.8c3.2-1.6,6.5-3.3,7.7-6.2c1.2-3,0.1-6.6-1-10c-1.1-3.4-2.1-6.6-0.6-8c1.6-1.6,4.7-0.8,8,0.1
                                c3.3,0.8,6.7,1.7,9.6,0.5c2.8-1.2,4.6-4.1,6.3-7c1.9-3.1,3.6-6,6.2-6c2.6,0,4.4,2.9,6.3,5.9c1.8,2.8,3.6,5.6,6.3,6.8
                                c2.9,1.2,6.2,0.4,9.5-0.3c3.3-0.8,6.4-1.5,8,0.1c1.5,1.4,0.3,4.6-0.9,7.9c-1.3,3.5-2.6,7.1-1.3,10.1c1.2,2.9,4.7,4.6,8,6.3
                                c3.5,1.7,6.7,3.4,6.7,5.8c0,0.1,0,0.3,0.1,0.4c0,0.1-0.1,0.3-0.1,0.4C92.5,53,89.2,54.7,85.7,56.4z"></path></g></svg><p>Широкий асортимент</p></div><div class="advantages_svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.5 100.5" style="${ssrRenderStyle({ "enable-background": "new 0 0 100.5 100.5" })}" xml:space="preserve"><path d="M85.309,54.327l-22.768-3.308L52.36,30.39c-0.252-0.512-0.773-0.836-1.345-0.836s-1.093,0.324-1.345,0.836L39.49,51.019
                                l-22.768,3.308c-0.564,0.082-1.034,0.478-1.211,1.021s-0.029,1.14,0.38,1.538l16.473,16.057l-3.888,22.674
                                c-0.097,0.563,0.135,1.132,0.597,1.468c0.463,0.335,1.075,0.379,1.58,0.114l20.361-10.706l20.364,10.706
                                c0.22,0.115,0.459,0.172,0.698,0.172c0.311,0,0.62-0.097,0.882-0.286c0.462-0.336,0.693-0.905,0.597-1.468l-3.892-22.674
                                l16.475-16.057c0.409-0.398,0.556-0.995,0.38-1.538C86.343,54.805,85.873,54.409,85.309,54.327z M67.007,71.345
                                c-0.354,0.345-0.515,0.841-0.432,1.328l3.511,20.455L51.714,83.47c-0.438-0.229-0.959-0.229-1.396,0l-18.369,9.658l3.507-20.455
                                c0.083-0.487-0.078-0.983-0.432-1.328L20.164,56.86l20.54-2.984c0.488-0.071,0.911-0.378,1.129-0.82l9.184-18.61l9.185,18.61
                                c0.218,0.442,0.641,0.749,1.129,0.82l20.54,2.984L67.007,71.345z"></path><path d="M25.549,38.009c0.564,0,1.105-0.32,1.36-0.865c0.351-0.75,0.026-1.643-0.725-1.994l-15.767-7.367
                                c-0.749-0.349-1.643-0.025-1.994,0.725s-0.026,1.643,0.725,1.994l15.767,7.367C25.12,37.964,25.336,38.009,25.549,38.009z"></path><path d="M91.576,28.507c-0.352-0.75-1.246-1.074-1.994-0.725l-15.767,7.367c-0.751,0.352-1.075,1.244-0.725,1.994
                                c0.255,0.545,0.796,0.865,1.36,0.865c0.213,0,0.429-0.045,0.634-0.141L90.851,30.5C91.603,30.15,91.927,29.257,91.576,28.507z"></path><path d="M51.016,22.984c0.828,0,1.5-0.672,1.5-1.5V4.131c0-0.829-0.672-1.5-1.5-1.5s-1.5,0.671-1.5,1.5v17.353
                                C49.516,22.312,50.188,22.984,51.016,22.984z"></path></svg><p>Консультация по выбору</p></div><div class="advantages_svg"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.5 100.5" style="${ssrRenderStyle({ "enable-background": "new 0 0 100.5 100.5" })}" xml:space="preserve"><path d="M79.938,28.201c-0.001-0.006-0.001-0.013-0.002-0.019c-0.026-0.129-0.073-0.25-0.13-0.365
                                c-0.014-0.028-0.029-0.055-0.045-0.083c-0.065-0.114-0.14-0.221-0.232-0.314c-0.001-0.001-0.002-0.003-0.003-0.004L63.562,11.447
                                c-0.001-0.001-0.002-0.001-0.003-0.002c-0.093-0.092-0.201-0.167-0.315-0.233c-0.027-0.016-0.054-0.031-0.082-0.045
                                c-0.115-0.057-0.235-0.104-0.364-0.13c-0.008-0.002-0.015-0.001-0.023-0.002c-0.089-0.016-0.18-0.028-0.274-0.028H21.532
                                c-0.829,0-1.5,0.672-1.5,1.5V87.49c0,0.828,0.671,1.5,1.5,1.5h56.933c0.829,0,1.5-0.672,1.5-1.5V28.475
                                C79.966,28.383,79.955,28.291,79.938,28.201z M64.002,16.131l10.843,10.847H64.002V16.131z M23.033,85.992V14.009h37.969v14.469
                                c0,0.828,0.671,1.5,1.5,1.5h14.464v56.015L23.033,85.992L23.033,85.992z"></path><path d="M48.264,31.897H29.517c-0.829,0-1.5,0.672-1.5,1.5s0.671,1.5,1.5,1.5h18.747c0.829,0,1.5-0.672,1.5-1.5
                                S49.093,31.897,48.264,31.897z"></path><path d="M48.264,39.014H29.517c-0.829,0-1.5,0.672-1.5,1.5s0.671,1.5,1.5,1.5h18.747c0.829,0,1.5-0.672,1.5-1.5
                                S49.093,39.014,48.264,39.014z"></path><path d="M48.264,46.132H29.517c-0.829,0-1.5,0.672-1.5,1.5s0.671,1.5,1.5,1.5h18.747c0.829,0,1.5-0.672,1.5-1.5
                                S49.093,46.132,48.264,46.132z"></path><path d="M62.95,62.418c-4.849,0-8.793,3.942-8.793,8.789c0,4.848,3.945,8.791,8.793,8.791s8.792-3.943,8.792-8.791
                                C71.742,66.36,67.798,62.418,62.95,62.418z M62.95,76.998c-3.194,0-5.793-2.598-5.793-5.791c0-3.192,2.599-5.789,5.793-5.789
                                c3.193,0,5.792,2.597,5.792,5.789C68.742,74.401,66.144,76.998,62.95,76.998z"></path></svg><p>Гарантия на продукцию</p></div></div><div class="wrap_bl_con"><div class="beige-container"><div class="content-wrapper"><div class="title-section"><h2>Газовые котлы для частного дома</h2><p class="subtitle">Экономичное и популярное решение для отопления. Подходят для домов любого размера, коттеджей и даже коммерческих зданий.</p></div><div class="features-grid"><div class="advantages-section"><h3>Преимущества:</h3><ul class="feature-list"><!--[-->`);
  ssrRenderList($data.advantages, (item, index) => {
    _push(`<li><span class="icon">✔</span> ${ssrInterpolate(item)}</li>`);
  });
  _push(`<!--]--></ul></div><div class="important-section"><h3>Важно при выборе:</h3><ul class="feature-list"><!--[-->`);
  ssrRenderList($data.importantNotes, (item, index) => {
    _push(`<li><span class="icon">🔹</span> ${ssrInterpolate(item)}</li>`);
  });
  _push(`<!--]--></ul></div></div><div class="buttons-container">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/solutions",
    class: "action-button orange"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Узнать больше `);
      } else {
        return [
          createTextVNode(" Узнать больше ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/contacts",
    class: "action-button blue"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Контакты `);
      } else {
        return [
          createTextVNode(" Контакты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/HomePage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const isServer = typeof window === "undefined";
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/services",
    name: "services",
    component: () => import("./assets/ServicesView-bX6DphZY.js")
  },
  {
    path: "/products",
    name: "products",
    component: () => import("./assets/ProductsView-CGAKvW6w.js")
  },
  {
    path: "/solutions",
    name: "solutions",
    component: () => import("./assets/SolutionsView-D9XamcxA.js")
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("./assets/PortfolioView-CM4tUi4_.js")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./assets/AboutView-3ufvGDon.js")
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("./assets/ContactsView-Cu64HYXm.js")
  },
  {
    path: "/portfolio/:id",
    name: "work-detail",
    component: () => import("./assets/WorkDetail-C9nxVV4e.js"),
    props: true
  }
];
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
router.onError((error) => {
  console.error("Router error:", error);
});
const LogoImage = "/build/assets/logo_0_2-DYWlkWF5.png";
const VkImage = "/build/assets/black_vk-BU0ocSDV.svg";
const InstImage = "/build/assets/black_inst-ChYdEMyH.svg";
const MtsImage = "/build/assets/mts-CD6J5ctd.jpg";
const _sfc_main$2 = {
  data() {
    return {
      images: {
        Logo: LogoImage,
        Vk: VkImage,
        Inst: InstImage,
        Mts: MtsImage
      },
      navLinks: [
        { path: "/", title: "Главная" },
        { path: "/products", title: "Продукция" },
        { path: "/services", title: "Услуги" },
        { path: "/solutions", title: "Готовые решения" },
        { path: "/portfolio", title: "Наши работы" },
        { path: "/about", title: "О компании" },
        { path: "/contacts", title: "Контакты" }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))} data-v-1fe4b404><div class="top-header" data-v-1fe4b404><div class="header-container" data-v-1fe4b404><div class="brand-section" data-v-1fe4b404>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "logo-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $data.images.Logo)} alt="ТеплоВит" class="logo-img" data-v-1fe4b404${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $data.images.Logo,
            alt: "ТеплоВит",
            class: "logo-img"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="brand-text" data-v-1fe4b404><div class="brand-name" data-v-1fe4b404><p class="red-text" data-v-1fe4b404>Компания &quot;ТеплоВит&quot; в Витебске</p></div><div class="brand-description" data-v-1fe4b404><p class="blue-text" data-v-1fe4b404>Отопление, Водоснабжение</p><p class="blue-text" data-v-1fe4b404>Альтернативная энергетика</p></div></div></div><div class="contacts-section" data-v-1fe4b404><div class="contact-item" data-v-1fe4b404><a href="#" class="social-link" data-v-1fe4b404><img${ssrRenderAttr("src", $data.images.Vk)} alt="VK" class="social-icon" data-v-1fe4b404><span data-v-1fe4b404>Наши соц сети</span></a></div><div class="contact-item" data-v-1fe4b404><a href="#" class="social-link" data-v-1fe4b404><img${ssrRenderAttr("src", $data.images.Inst)} alt="Instagram" class="social-icon" data-v-1fe4b404><span data-v-1fe4b404>Наши соц сети</span></a></div><div class="contact-item" data-v-1fe4b404><img${ssrRenderAttr("src", $data.images.Mts)} alt="МТС" class="phone-icon" data-v-1fe4b404><a href="tel:+375336130108" class="phone-link" data-v-1fe4b404>+375 33 613-01-08</a></div><div class="contact-item" data-v-1fe4b404><img${ssrRenderAttr("src", $data.images.Mts)} alt="МТС" class="phone-icon" data-v-1fe4b404><a href="tel:+375297177880" class="phone-link" data-v-1fe4b404>+375 29 717-78-80</a></div></div></div></div><div class="navigation-header" data-v-1fe4b404><nav class="main-navigation" data-v-1fe4b404><!--[-->`);
  ssrRenderList($data.navLinks, (link) => {
    _push(ssrRenderComponent(_component_router_link, {
      key: link.path,
      to: link.path,
      class: "nav-link",
      "active-class": "active"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></nav></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1fe4b404"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer_info"><p>© 2013, компания &quot;ТеплоВит&quot;, teplo.vit@mail.ru, +375 33 613 01 08</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderComponent, FooterComponent }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderComponent = resolveComponent("HeaderComponent");
  const _component_router_view = resolveComponent("router-view");
  const _component_FooterComponent = resolveComponent("FooterComponent");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
  _push(`<main>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
(async function main() {
  const requestUrl = process.argv[2] || "/";
  const app = createSSRApp(App);
  app.use(router);
  await router.push(requestUrl);
  await router.isReady();
  const html = await renderToString(app);
  process.stdout.write(html);
})();
export {
  MtsImage as M,
  _export_sfc as _
};
