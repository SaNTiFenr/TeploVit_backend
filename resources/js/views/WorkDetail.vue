<template>
  <div class="work-detail">
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="content">
      <h1 class="title more_title">{{ work.title }}</h1>
      <img :src="work.imageUrl" :alt="work.title" class="work-image">
      <div class="description description_title">{{ work.fullDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      work: null,
      loading: true,
      error: null
    }
  },
 async created() {
  try {
    const response = await axios.get(`/api/works/${this.id}`);

    if (response.data?.data) {
      this.work = {
        id: response.data.data.id,
        title: response.data.data.title,
        imageUrl: response.data.data.imageUrl,
        fullDescription: response.data.data.fullDescription || 'Нет описания' // Исправлено имя поля
      };
    }
  } catch (err) {
    this.error = 'Ошибка загрузки данных';
  }
}
}
</script>

<style scoped>
.work-detail {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #f5f5f0;
}

.title {
  color: #333;
  margin-bottom: 1.5rem;
}

.work-image {
  width: 100%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.description {
  line-height: 1.6;
  color: #666;
}


.more_title{
    text-align: -webkit-center;
}

.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    align-items: center;
}

.error {
  color: #dc3545;
  text-align: center;
  padding: 2rem;
}
</style>
