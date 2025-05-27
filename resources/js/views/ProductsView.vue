<template>
  <div class="products-page">
    <!-- Шапка страницы -->
    <div class="page-header">
      <h1>Наша продукция</h1>
      <div class="header-divider"></div>
      <p class="page-description">
        Широкий ассортимент качественного оборудования для систем отопления и водоснабжения
      </p>
    </div>

    <!-- Фильтры и сортировка -->
    <div class="products-controls">
      <div class="filter-section">
        <select v-model="selectedCategory" class="filter-select">
          <option value="all">Все категории</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>

        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Поиск по названию..."
            class="search-input"
          >
          <button class="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#131d82" stroke-width="2"/>
              <path d="M21 21L16.65 16.65" stroke="#131d82" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="sort-section">
        <span class="sort-label">Сортировка:</span>
        <select v-model="sortOption" class="sort-select">
          <option value="name-asc">По названию (А-Я)</option>
          <option value="name-desc">По названию (Я-А)</option>
          <option value="price-asc">По цене (сначала дешевле)</option>
          <option value="price-desc">По цене (сначала дороже)</option>
        </select>
      </div>
    </div>

    <!-- Состояния загрузки -->
    <div v-if="loading" class="loading-overlay">
      <div class="loader"></div>
      <p>Загрузка товаров...</p>
    </div>

    <!-- Сообщение об ошибке -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- Список товаров -->
    <div class="products-grid" v-if="!loading && !error">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        @click="showProductDetails(product)"
      >
        <div class="product-image-container">
          <img :src="getImageUrl(product.image)" :alt="product.name" class="product-image">
          <div v-if="product.is_new" class="product-badge">Новинка</div>
        </div>

        <div class="product-info">
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-category">{{ getCategoryName(product.category_id) }}</p>

          <div class="product-specs">
            <div class="spec-item" v-for="spec in product.specs?.slice(0, 2)" :key="spec.key">
              <span class="spec-key">{{ spec.key }}:</span>
              <span class="spec-value">{{ spec.value }}</span>
            </div>
          </div>

          <div class="product-footer">
            <span class="product-price">{{ formatPrice(product.price) }} руб.</span>
            <button class="product-button" @click.stop="openContactModal">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <div class="pagination" v-if="!loading && !error">
      <button
        v-for="page in totalPages"
        :key="page"
        class="page-button"
        :class="{ 'active': currentPage === page }"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
    </div>

    <!-- Модальное окно с контактами -->
    <div v-if="showContactModal" class="modal-overlay" @click.self="closeContactModal">
      <div class="contact-modal">
        <button class="modal-close" @click="closeContactModal">×</button>

        <div class="contact-modal-content">
          <h2>Свяжитесь с нами</h2>
          <div class="contact-info">
            <p>Телефоны для заказа:</p>
            <ul class="phone-numbers">
              <li>
                <a href="tel:+375336130108">+375 33 613-01-08</a>
              </li>
              <li>
                <a href="tel:+375297177880">+375 29 717-78-80</a>
              </li>
            </ul>
            <p>Или оставьте заявку на сайте</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно с деталями товара -->
    <div v-if="selectedProduct" class="modal-overlay" @click.self="closeProductModal">
      <div class="product-modal">
        <button class="modal-close" @click="closeProductModal">×</button>

        <div class="modal-content">
          <div class="modal-images">
            <img :src="getImageUrl(selectedProduct.image)" :alt="selectedProduct.name" class="main-image">
            <div class="thumbnails">
              <img
                v-for="(img, index) in selectedProduct.images"
                :key="index"
                :src="getImageUrl(img)"
                @click="selectedImage = img"
                class="thumbnail"
                :class="{ 'active': selectedImage === img }"
              >
            </div>
          </div>

          <div class="modal-details">
            <h2>{{ selectedProduct.name }}</h2>
            <p class="modal-category">{{ getCategoryName(selectedProduct.category_id) }}</p>

            <div class="price-section">
              <span class="modal-price">{{ formatPrice(selectedProduct.price) }} руб.</span>
              <span v-if="selectedProduct.old_price" class="modal-old-price">
                {{ formatPrice(selectedProduct.old_price) }} руб.
              </span>
            </div>

            <div class="modal-specs">
              <div class="spec-row" v-for="spec in selectedProduct.specs" :key="spec.key">
                <span class="spec-name">{{ spec.key }}:</span>
                <span class="spec-value">{{ spec.value }}</span>
              </div>
            </div>

            <p class="modal-description">{{ selectedProduct.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedCategory: 'all',
      searchQuery: '',
      sortOption: 'name-asc',
      currentPage: 1,
      itemsPerPage: 8,
      selectedProduct: null,
      selectedImage: '',
      categories: [],
      products: [],
      totalItems: 0,
      loading: false,
      error: null,
      showContactModal: false
    }
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
          category: this.selectedCategory !== 'all' ? this.selectedCategory : null,
          search: this.searchQuery,
          sort_option: this.sortOption,
          itemsPerPage: this.itemsPerPage
        };

        const response = await axios.get('/api/products', { params });
        this.products = response.data.data;
        this.totalItems = response.data.meta.total_items;
      } catch (error) {
        this.error = 'Ошибка загрузки товаров';
        console.error('Ошибка загрузки товаров:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchCategories() {
      try {
        const response = await axios.get('/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Ошибка загрузки категорий:', error);
      }
    },

    getCategoryName(id) {
      const category = this.categories.find(c => c.id == id);
      return category ? category.name : '';
    },

    formatPrice(price) {
      return new Intl.NumberFormat('ru-RU').format(price);
    },

    getImageUrl(path) {
      return path ? `/storage/${path}` : 'https://via.placeholder.com/300';
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
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.contact-modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  position: relative;
}

.contact-modal-content {
  text-align: center;
}

.contact-info {
  margin-top: 1rem;
}

.phone-numbers {
  list-style: none;
  padding: 0;
}

.phone-numbers li {
  margin: 1rem 0;
}

.phone-numbers a {
  color: #131d82;
  text-decoration: none;
  font-size: 1.1rem;
}

.phone-numbers a:hover {
  text-decoration: underline;
}

/* Изменяем стиль кнопки */
.product-button {
  background-color: #131d82;
  color: white;
  /* ... остальные стили кнопки ... */
}

.product-button:hover {
  background-color: #0f155e;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  color: #dc3545;
  padding: 1rem;
  border: 1px solid #dc3545;
  border-radius: 4px;
  margin: 1rem;
  text-align: center;
}
.products-page {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  color: #131d82;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.header-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #131d82, #f35d22);
  margin: 0 auto 1.5rem;
}

.page-description {
  color: #555;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
}

.products-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.filter-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}

.search-box {
  display: flex;
  flex-grow: 1;
  max-width: 400px;
}

.search-input {
  flex-grow: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px 0 0 6px;
  font-size: 0.9rem;
}

.search-button {
  background-color: white;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 6px 6px 0;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #f5f5f0;
}

.filter-select,
.sort-select {
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: white;
  cursor: pointer;
}

.sort-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-label {
  color: #555;
  font-size: 0.9rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.product-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f35d22;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  color: #131d82;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  min-height: 3rem;
}

.product-category {
  color: #f35d22;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.product-specs {
  margin: 1rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0.8rem 0;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.spec-item:last-child {
  margin-bottom: 0;
}

.spec-key {
  color: #777;
}

.spec-value {
  color: #131d82;
  font-weight: 500;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.product-price {
  color: #131d82;
  font-weight: bold;
  font-size: 1.1rem;
}

.product-button {
  background-color: #131d82;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-button:hover {
  background-color: #f35d22;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-button {
  background-color: white;
  border: 1px solid #ddd;
  color: #555;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.page-button:hover {
  border-color: #131d82;
  color: #131d82;
}

.page-button.active {
  background-color: #131d82;
  color: white;
  border-color: #131d82;
}

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.product-modal {
  background-color: white;
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  z-index: 10;
}

.modal-close:hover {
  color: #f35d22;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.modal-images {
  margin-bottom: 1.5rem;
}

.main-image {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 6px;
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.thumbnail:hover,
.thumbnail.active {
  border-color: #f35d22;
}

.modal-details h2 {
  color: #131d82;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.modal-category {
  color: #f35d22;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.modal-price {
  color: #131d82;
  font-size: 1.5rem;
  font-weight: bold;
}

.modal-old-price {
  color: #777;
  text-decoration: line-through;
  font-size: 1.1rem;
}

.modal-specs {
  margin: 1.5rem 0;
}

.spec-row {
  display: flex;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.spec-name {
  color: #777;
  width: 150px;
  flex-shrink: 0;
}

.spec-value {
  color: #333;
  font-weight: 500;
}

.modal-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modal-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-control button {
  background-color: #f5f5f0;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-control button:hover {
  background-color: #e0e0e0;
}

.quantity-control span {
  width: 50px;
  text-align: center;
}

.add-to-cart {
  background-color: #131d82;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-grow: 1;
}

.add-to-cart:hover {
  background-color: #f35d22;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .products-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    max-width: none;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .add-to-cart {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .modal-content {
    flex-direction: row;
  }

  .products-page{
    padding: 0%;
  }

  .modal-images {
    width: 50%;
    padding-right: 1.5rem;
    margin-bottom: 0;
  }

  .modal-details {
    width: 50%;
    padding-left: 1.5rem;
  }
  .filter-select,
  .sort-select{
    padding: 0px;
  }
}
</style>
