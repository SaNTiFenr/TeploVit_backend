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
      quantity: 1,
      selectedProduct: null,
      selectedImage: "",
      categories: [
        { id: 1, name: "Газовые котлы" },
        { id: 2, name: "Твердотопливные котлы" },
        { id: 3, name: "Электрические котлы" },
        { id: 4, name: "Радиаторы" },
        { id: 5, name: "Теплые полы" },
        { id: 6, name: "Бойлеры" }
      ],
      products: [
        {
          id: 1,
          name: "Газовый котел Baxi Eco Compact 24F",
          category_id: 1,
          price: 245e3,
          oldPrice: 259900,
          isNew: true,
          image: "https://example.com/baxi-eco-compact.jpg",
          images: [
            "https://example.com/baxi-eco-compact-1.jpg",
            "https://example.com/baxi-eco-compact-2.jpg",
            "https://example.com/baxi-eco-compact-3.jpg"
          ],
          specs: [
            { key: "Мощность", value: "24 кВт" },
            { key: "КПД", value: "92.5%" },
            { key: "Тип камеры", value: "Закрытая" },
            { key: "Габариты", value: "730x400x299 мм" }
          ],
          description: "Настенный газовый котел с закрытой камерой сгорания и высоким КПД. Идеальное решение для отопления частного дома площадью до 240 м²."
        }
        // Другие товары...
      ]
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      if (this.selectedCategory !== "all") {
        filtered = filtered.filter((p) => p.category_id == this.selectedCategory);
      }
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (p) => p.name.toLowerCase().includes(query)
        );
      }
      const [sortField, sortDirection] = this.sortOption.split("-");
      filtered.sort((a, b) => {
        if (sortField === "price") {
          return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
        } else {
          return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
      });
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return filtered.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    }
  },
  methods: {
    getCategoryName(id) {
      const category = this.categories.find((c) => c.id == id);
      return category ? category.name : "";
    },
    formatPrice(price) {
      return new Intl.NumberFormat("ru-RU").format(price);
    },
    showProductDetails(product) {
      this.selectedProduct = product;
      this.selectedImage = product.image;
      this.quantity = 1;
    },
    closeModal() {
      this.selectedProduct = null;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart(product) {
      console.log("Добавлено в корзину:", product);
    },
    addSelectedToCart() {
      if (this.selectedProduct) {
        const item = {
          product: this.selectedProduct,
          quantity: this.quantity
        };
        this.addToCart(item);
        this.closeModal();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-page" }, _attrs))} data-v-7dbc9081><div class="page-header" data-v-7dbc9081><h1 data-v-7dbc9081>Наша продукция</h1><div class="header-divider" data-v-7dbc9081></div><p class="page-description" data-v-7dbc9081> Широкий ассортимент качественного оборудования для систем отопления и водоснабжения </p></div><div class="products-controls" data-v-7dbc9081><div class="filter-section" data-v-7dbc9081><select class="filter-select" data-v-7dbc9081><option value="all" data-v-7dbc9081${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, "all") : ssrLooseEqual($data.selectedCategory, "all")) ? " selected" : ""}>Все категории</option><!--[-->`);
  ssrRenderList($data.categories, (category) => {
    _push(`<option${ssrRenderAttr("value", category.id)} data-v-7dbc9081${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, category.id) : ssrLooseEqual($data.selectedCategory, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
  });
  _push(`<!--]--></select><div class="search-box" data-v-7dbc9081><input type="text"${ssrRenderAttr("value", $data.searchQuery)} placeholder="Поиск по названию..." class="search-input" data-v-7dbc9081><button class="search-button" data-v-7dbc9081><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7dbc9081><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#131d82" stroke-width="2" data-v-7dbc9081></path><path d="M21 21L16.65 16.65" stroke="#131d82" stroke-width="2" stroke-linecap="round" data-v-7dbc9081></path></svg></button></div></div><div class="sort-section" data-v-7dbc9081><span class="sort-label" data-v-7dbc9081>Сортировка:</span><select class="sort-select" data-v-7dbc9081><option value="name-asc" data-v-7dbc9081${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "name-asc") : ssrLooseEqual($data.sortOption, "name-asc")) ? " selected" : ""}>По названию (А-Я)</option><option value="name-desc" data-v-7dbc9081${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "name-desc") : ssrLooseEqual($data.sortOption, "name-desc")) ? " selected" : ""}>По названию (Я-А)</option><option value="price-asc" data-v-7dbc9081${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "price-asc") : ssrLooseEqual($data.sortOption, "price-asc")) ? " selected" : ""}>По цене (сначала дешевле)</option><option value="price-desc" data-v-7dbc9081${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "price-desc") : ssrLooseEqual($data.sortOption, "price-desc")) ? " selected" : ""}>По цене (сначала дороже)</option></select></div></div><div class="products-grid" data-v-7dbc9081><!--[-->`);
  ssrRenderList($options.filteredProducts, (product) => {
    _push(`<div class="product-card" data-v-7dbc9081><div class="product-image-container" data-v-7dbc9081><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="product-image" data-v-7dbc9081>`);
    if (product.isNew) {
      _push(`<div class="product-badge" data-v-7dbc9081>Новинка</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="product-info" data-v-7dbc9081><h3 class="product-title" data-v-7dbc9081>${ssrInterpolate(product.name)}</h3><p class="product-category" data-v-7dbc9081>${ssrInterpolate($options.getCategoryName(product.category_id))}</p><div class="product-specs" data-v-7dbc9081><!--[-->`);
    ssrRenderList(product.specs.slice(0, 2), (spec) => {
      _push(`<div class="spec-item" data-v-7dbc9081><span class="spec-key" data-v-7dbc9081>${ssrInterpolate(spec.key)}:</span><span class="spec-value" data-v-7dbc9081>${ssrInterpolate(spec.value)}</span></div>`);
    });
    _push(`<!--]--></div><div class="product-footer" data-v-7dbc9081><span class="product-price" data-v-7dbc9081>${ssrInterpolate($options.formatPrice(product.price))} руб.</span><button class="product-button" data-v-7dbc9081> В корзину </button></div></div></div>`);
  });
  _push(`<!--]--></div><div class="pagination" data-v-7dbc9081><!--[-->`);
  ssrRenderList($options.totalPages, (page) => {
    _push(`<button class="${ssrRenderClass([{ "active": $data.currentPage === page }, "page-button"])}" data-v-7dbc9081>${ssrInterpolate(page)}</button>`);
  });
  _push(`<!--]--></div>`);
  if ($data.selectedProduct) {
    _push(`<div class="modal-overlay" data-v-7dbc9081><div class="product-modal" data-v-7dbc9081><button class="modal-close" data-v-7dbc9081>×</button><div class="modal-content" data-v-7dbc9081><div class="modal-images" data-v-7dbc9081><img${ssrRenderAttr("src", $data.selectedProduct.image)}${ssrRenderAttr("alt", $data.selectedProduct.name)} class="main-image" data-v-7dbc9081><div class="thumbnails" data-v-7dbc9081><!--[-->`);
    ssrRenderList($data.selectedProduct.images, (img, index) => {
      _push(`<img${ssrRenderAttr("src", img)} class="${ssrRenderClass([{ "active": $data.selectedImage === img }, "thumbnail"])}" data-v-7dbc9081>`);
    });
    _push(`<!--]--></div></div><div class="modal-details" data-v-7dbc9081><h2 data-v-7dbc9081>${ssrInterpolate($data.selectedProduct.name)}</h2><p class="modal-category" data-v-7dbc9081>${ssrInterpolate($options.getCategoryName($data.selectedProduct.category_id))}</p><div class="price-section" data-v-7dbc9081><span class="modal-price" data-v-7dbc9081>${ssrInterpolate($options.formatPrice($data.selectedProduct.price))} руб.</span>`);
    if ($data.selectedProduct.oldPrice) {
      _push(`<span class="modal-old-price" data-v-7dbc9081>${ssrInterpolate($options.formatPrice($data.selectedProduct.oldPrice))} руб. </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="modal-specs" data-v-7dbc9081><!--[-->`);
    ssrRenderList($data.selectedProduct.specs, (spec) => {
      _push(`<div class="spec-row" data-v-7dbc9081><span class="spec-name" data-v-7dbc9081>${ssrInterpolate(spec.key)}:</span><span class="spec-value" data-v-7dbc9081>${ssrInterpolate(spec.value)}</span></div>`);
    });
    _push(`<!--]--></div><p class="modal-description" data-v-7dbc9081>${ssrInterpolate($data.selectedProduct.description)}</p><div class="modal-actions" data-v-7dbc9081><div class="quantity-control" data-v-7dbc9081><button data-v-7dbc9081>-</button><span data-v-7dbc9081>${ssrInterpolate($data.quantity)}</span><button data-v-7dbc9081>+</button></div><button class="add-to-cart" data-v-7dbc9081> Добавить в корзину </button></div></div></div></div></div>`);
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
const ProductsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7dbc9081"]]);
export {
  ProductsView as default
};
