import axios from "axios";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "vue-router";
const _sfc_main = {
  data() {
    return {
      selectedCategory: "all",
      searchQuery: "",
      sortOption: "name-asc",
      currentPage: 1,
      itemsPerPage: 8,
      selectedProduct: null,
      selectedImage: "",
      categories: [],
      products: [],
      totalItems: 0,
      loading: false,
      error: null,
      showContactModal: false
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  watch: {
    selectedCategory() {
      this.currentPage = 1;
      this.fetchProducts();
    },
    searchQuery() {
      this.currentPage = 1;
      this.fetchProducts();
    },
    sortOption() {
      this.fetchProducts();
    },
    currentPage() {
      this.fetchProducts();
    }
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const params = {
          page: this.currentPage,
          category: this.selectedCategory !== "all" ? this.selectedCategory : null,
          search: this.searchQuery,
          sort_option: this.sortOption,
          itemsPerPage: this.itemsPerPage
        };
        const response = await axios.get("/api/products", { params });
        this.products = response.data.data;
        this.totalItems = response.data.meta.total_items;
      } catch (error) {
        this.error = "Ошибка загрузки товаров";
        console.error("Ошибка загрузки товаров:", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get("/api/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Ошибка загрузки категорий:", error);
      }
    },
    getCategoryName(id) {
      const category = this.categories.find((c) => c.id == id);
      return category ? category.name : "";
    },
    formatPrice(price) {
      return new Intl.NumberFormat("ru-RU").format(price);
    },
    getImageUrl(path) {
      return path ? `/storage/${path}` : "https://via.placeholder.com/300";
    },
    showProductDetails(product) {
      this.selectedProduct = product;
      this.selectedImage = product.image;
    },
    closeProductModal() {
      this.selectedProduct = null;
    },
    openContactModal() {
      this.showContactModal = true;
    },
    closeContactModal() {
      this.showContactModal = false;
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchProducts();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-page" }, _attrs))} data-v-aa7c63b2><div class="page-header" data-v-aa7c63b2><h1 data-v-aa7c63b2>Наша продукция</h1><div class="header-divider" data-v-aa7c63b2></div><p class="page-description" data-v-aa7c63b2> Широкий ассортимент качественного оборудования для систем отопления и водоснабжения </p></div><div class="products-controls" data-v-aa7c63b2><div class="filter-section" data-v-aa7c63b2><select class="filter-select" data-v-aa7c63b2><option value="all" data-v-aa7c63b2${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, "all") : ssrLooseEqual($data.selectedCategory, "all")) ? " selected" : ""}>Все категории</option><!--[-->`);
  ssrRenderList($data.categories, (category) => {
    _push(`<option${ssrRenderAttr("value", category.id)} data-v-aa7c63b2${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, category.id) : ssrLooseEqual($data.selectedCategory, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
  });
  _push(`<!--]--></select><div class="search-box" data-v-aa7c63b2><input type="text"${ssrRenderAttr("value", $data.searchQuery)} placeholder="Поиск по названию..." class="search-input" data-v-aa7c63b2><button class="search-button" data-v-aa7c63b2><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-aa7c63b2><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#131d82" stroke-width="2" data-v-aa7c63b2></path><path d="M21 21L16.65 16.65" stroke="#131d82" stroke-width="2" stroke-linecap="round" data-v-aa7c63b2></path></svg></button></div></div><div class="sort-section" data-v-aa7c63b2><span class="sort-label" data-v-aa7c63b2>Сортировка:</span><select class="sort-select" data-v-aa7c63b2><option value="name-asc" data-v-aa7c63b2${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "name-asc") : ssrLooseEqual($data.sortOption, "name-asc")) ? " selected" : ""}>По названию (А-Я)</option><option value="name-desc" data-v-aa7c63b2${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "name-desc") : ssrLooseEqual($data.sortOption, "name-desc")) ? " selected" : ""}>По названию (Я-А)</option><option value="price-asc" data-v-aa7c63b2${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "price-asc") : ssrLooseEqual($data.sortOption, "price-asc")) ? " selected" : ""}>По цене (сначала дешевле)</option><option value="price-desc" data-v-aa7c63b2${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "price-desc") : ssrLooseEqual($data.sortOption, "price-desc")) ? " selected" : ""}>По цене (сначала дороже)</option></select></div></div>`);
  if ($data.loading) {
    _push(`<div class="loading-overlay" data-v-aa7c63b2><div class="loader" data-v-aa7c63b2></div><p data-v-aa7c63b2>Загрузка товаров...</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.error) {
    _push(`<div class="error-message" data-v-aa7c63b2>${ssrInterpolate($data.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.loading && !$data.error) {
    _push(`<div class="products-grid" data-v-aa7c63b2><!--[-->`);
    ssrRenderList($data.products, (product) => {
      var _a;
      _push(`<div class="product-card" data-v-aa7c63b2><div class="product-image-container" data-v-aa7c63b2><img${ssrRenderAttr("src", $options.getImageUrl(product.image))}${ssrRenderAttr("alt", product.name)} class="product-image" data-v-aa7c63b2>`);
      if (product.is_new) {
        _push(`<div class="product-badge" data-v-aa7c63b2>Новинка</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="product-info" data-v-aa7c63b2><h3 class="product-title" data-v-aa7c63b2>${ssrInterpolate(product.name)}</h3><p class="product-category" data-v-aa7c63b2>${ssrInterpolate($options.getCategoryName(product.category_id))}</p><div class="product-specs" data-v-aa7c63b2><!--[-->`);
      ssrRenderList((_a = product.specs) == null ? void 0 : _a.slice(0, 2), (spec) => {
        _push(`<div class="spec-item" data-v-aa7c63b2><span class="spec-key" data-v-aa7c63b2>${ssrInterpolate(spec.key)}:</span><span class="spec-value" data-v-aa7c63b2>${ssrInterpolate(spec.value)}</span></div>`);
      });
      _push(`<!--]--></div><div class="product-footer" data-v-aa7c63b2><span class="product-price" data-v-aa7c63b2>${ssrInterpolate($options.formatPrice(product.price))} руб.</span><button class="product-button" data-v-aa7c63b2> Заказать </button></div></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.loading && !$data.error) {
    _push(`<div class="pagination" data-v-aa7c63b2><!--[-->`);
    ssrRenderList($options.totalPages, (page) => {
      _push(`<button class="${ssrRenderClass([{ "active": $data.currentPage === page }, "page-button"])}" data-v-aa7c63b2>${ssrInterpolate(page)}</button>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showContactModal) {
    _push(`<div class="modal-overlay" data-v-aa7c63b2><div class="contact-modal" data-v-aa7c63b2><button class="modal-close" data-v-aa7c63b2>×</button><div class="contact-modal-content" data-v-aa7c63b2><h2 data-v-aa7c63b2>Свяжитесь с нами</h2><div class="contact-info" data-v-aa7c63b2><p data-v-aa7c63b2>Телефоны для заказа:</p><ul class="phone-numbers" data-v-aa7c63b2><li data-v-aa7c63b2><a href="tel:+375336130108" data-v-aa7c63b2>+375 33 613-01-08</a></li><li data-v-aa7c63b2><a href="tel:+375297177880" data-v-aa7c63b2>+375 29 717-78-80</a></li></ul><p data-v-aa7c63b2>Или оставьте заявку на сайте</p></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.selectedProduct) {
    _push(`<div class="modal-overlay" data-v-aa7c63b2><div class="product-modal" data-v-aa7c63b2><button class="modal-close" data-v-aa7c63b2>×</button><div class="modal-content" data-v-aa7c63b2><div class="modal-images" data-v-aa7c63b2><img${ssrRenderAttr("src", $options.getImageUrl($data.selectedProduct.image))}${ssrRenderAttr("alt", $data.selectedProduct.name)} class="main-image" data-v-aa7c63b2><div class="thumbnails" data-v-aa7c63b2><!--[-->`);
    ssrRenderList($data.selectedProduct.images, (img, index) => {
      _push(`<img${ssrRenderAttr("src", $options.getImageUrl(img))} class="${ssrRenderClass([{ "active": $data.selectedImage === img }, "thumbnail"])}" data-v-aa7c63b2>`);
    });
    _push(`<!--]--></div></div><div class="modal-details" data-v-aa7c63b2><h2 data-v-aa7c63b2>${ssrInterpolate($data.selectedProduct.name)}</h2><p class="modal-category" data-v-aa7c63b2>${ssrInterpolate($options.getCategoryName($data.selectedProduct.category_id))}</p><div class="price-section" data-v-aa7c63b2><span class="modal-price" data-v-aa7c63b2>${ssrInterpolate($options.formatPrice($data.selectedProduct.price))} руб.</span>`);
    if ($data.selectedProduct.old_price) {
      _push(`<span class="modal-old-price" data-v-aa7c63b2>${ssrInterpolate($options.formatPrice($data.selectedProduct.old_price))} руб. </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="modal-specs" data-v-aa7c63b2><!--[-->`);
    ssrRenderList($data.selectedProduct.specs, (spec) => {
      _push(`<div class="spec-row" data-v-aa7c63b2><span class="spec-name" data-v-aa7c63b2>${ssrInterpolate(spec.key)}:</span><span class="spec-value" data-v-aa7c63b2>${ssrInterpolate(spec.value)}</span></div>`);
    });
    _push(`<!--]--></div><p class="modal-description" data-v-aa7c63b2>${ssrInterpolate($data.selectedProduct.description)}</p></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/ProductsView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aa7c63b2"]]);
export {
  ProductsView as default
};
