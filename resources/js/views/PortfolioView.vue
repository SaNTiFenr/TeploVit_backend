<template>
    <div class="portfolio-page">
      <div class="portfolio-header">
        <h1>Наши выполненные работы</h1>
        <div class="header-divider"></div>
      </div>

      <div class="portfolio-grid">
        <div
          class="portfolio-card"
          v-for="work in works"
          :key="work.id"
          @mouseenter="hoveredCard = work.id"
          @mouseleave="hoveredCard = null"
        >
          <div class="image-container">
            <img
              :src="work.image_url"
              :alt="work.title"
              class="portfolio-image"
            >
            <div
              class="image-overlay"
              :class="{ 'active': hoveredCard === work.id }"
            ></div>
          </div>
          <div class="card-content">
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-description">{{ work.description }}</p>
            <router-link
                :to="{ name: 'work-detail', params: { id: work.id } }"
                :style="{ backgroundColor: hoveredCard === work.id ? '#f35d22' : '#131d82' }"
                >
                <button class="details-button ">
                Подробнее
                </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="load-more">
        <button class="load-button">Показать еще</button>
      </div>
    </div>
  </template>

 <script>
export default {
  data() {
    return {
      hoveredCard: null,
      works: [],
      error: null
    }
  },
async mounted() {
  try {
    const response = await axios.get('/api/works');

    // Используем вложенный массив data
    if (!response.data.data || !Array.isArray(response.data.data)) {
      throw new Error('Некорректная структура данных');
    }

    this.works = response.data.data.map(work => ({
      id: work.id,
      title: work.title,
      description: work.description,
      image_url: work.imageUrl // Обратите внимание на imageUrl с большой буквы
    }));

  } catch (error) {
    console.error('Ошибка загрузки:', error);
    this.works = [];
  }
}
}
</script>

<style scoped>


.portfolio-page {
    width: 100%;
    padding: 2rem;
    background-color: #f5f5f0;
}

.portfolio-header {
    text-align: center;
    margin-bottom: 3rem;
}

.portfolio-header h1 {
    color: #131d82;
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.header-divider {
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #131d82, #f35d22);
    margin: 0 auto;
}

.portfolio-grid {
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.portfolio-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.portfolio-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.portfolio-card:hover .portfolio-image {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(19, 29, 130, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-overlay.active {
    opacity: 1;
}

.card-content {
    padding: 1.5rem;
}

.work-title {
    color: #131d82;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.work-description {
    color: #555;
    line-height: 1.5;
    margin-bottom: 1rem;
    min-height: 60px;
}

.details-button {
    width: 100%;
    padding: 0.7rem;
    background-color: #131d82;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.details-button:hover {
    background-color: #f35d22;
}

.load-more {
    text-align: center;
    margin-top: 2rem;
}

.load-button {
    background-color: transparent;
    color: #131d82;
    border: 2px solid #131d82;
    padding: 0.8rem 2.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.load-button:hover {
    background-color: #131d82;
    color: white;
}

@media (max-width: 768px) {
    .portfolio-header h1 {
        font-size: 1.8rem;
    }

    .portfolio-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}
</style>
