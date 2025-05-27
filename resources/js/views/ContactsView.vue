<template>
        <div class="Contacts_wrapper">
            <div class="main_wrapper">
                <div class="about_us_info">
                    <div>
                        <p class="big_p">
                            Контакты
                        </p>
                    </div>
                    <div class="info_t">
                        <p>
                            Компания "ТеплоВит" Республика Беларусь, 210040, г. Витебск, ул. Фрунзе д. 22 к.3
                        </p>
                        <p>
                            Телефоны:
                        </p>
                        <div class="number_wrapper">
                            <img :src="images.Mts" alt="">
                            <p>+ 375 33 613-01-08</p>
                        </div>
                        <div class="number_wrapper">
                            <img :src="images.Mts" alt="">
                            <p>+ 375 29 717-78-80</p>
                        </div>
                        <p>
                            Электронная почта: <a href="mailto:teplo.vit@mail.ru">teplo.vit@mail.ru</a>
                        </p>
                    </div>
                </div>
                <div class="map_wrapper">
                    <p class="map_wr_p">
                        Схема проезда
                    </p>
                    <div style="position:relative;overflow:hidden;">
                        <a href="https://yandex.by/maps/154/vitebsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Витебск</a><a href="https://yandex.by/maps/154/vitebsk/house/Z0kYdAVgTUEOQFtvfX5xeXtibA==/?ll=30.220909%2C55.208699&utm_medium=mapframe&utm_source=maps&z=18.88" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Гагарина, 24 — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/?ll=30.220909%2C55.208699&mode=whatshere&whatshere%5Bpoint%5D=30.220180%2C55.208612&whatshere%5Bzoom%5D=17&z=18.88" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                    </div>

                </div>
                <div class="form-container">
                <p class="big_p">Форма обратной связи</p>
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <label for="name">Имя:</label>
                                <input
                                    type="text"
                                    id="name"
                                    v-model="form.name"
                                    :class="{ 'error': errors.name }"
                                >
                                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                            </div>

                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                v-model="form.email"
                                :class="{ 'error': errors.email }"
                            >
                            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                            </div>

                            <div class="form-group">
                            <label for="message">Сообщение:</label>
                            <textarea
                                id="message"
                                rows="4"
                                v-model="form.message"
                                :class="{ 'error': errors.message }"
                            ></textarea>
                            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                            </div>

                            <button type="submit" class="form_button">Отправить</button>

                        <div v-if="successMessage" class="success-message">
                        {{ successMessage }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import MtsImage from '@/assets/images/mts.jpg';

export default {
  data() {
    return {
      images: { Mts: MtsImage },
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {},
      successMessage: ''
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name.trim()) {
        this.errors.name = 'Пожалуйста, введите ваше имя';
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Пожалуйста, введите ваш email';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = 'Пожалуйста, введите корректный email';
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'Пожалуйста, введите сообщение';
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
        const response = await axios.post('/api/contact', {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        });

        this.successMessage = 'Сообщение успешно отправлено!';
        this.form = { name: '', email: '', message: '' };
        setTimeout(() => this.successMessage = '', 3000);

      } catch (error) {
        this.successMessage = 'Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.';
        console.error('Ошибка отправки:', error);
      }
    }
  }
}
</script>
<style scoped>
.error {
  border: 1px solid red !important;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}

.success-message {
  color: green;
  margin-top: 1rem;
  font-weight: bold;
}
</style>
