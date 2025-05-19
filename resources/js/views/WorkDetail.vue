<template>
  <div class="work-detail">
    <img :src="work.image_url" :alt="work.title">
    <h1>{{ work.title }}</h1>
    <p>{{ work.full_description }}</p>
    <router-link to="/portfolio">Назад</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: {}
    }
  },
  mounted() {
    axios.get(`/api/works/${this.$route.params.id}`)
      .then(response => {
        this.work = response.data;
      });
  }
}
</script>
