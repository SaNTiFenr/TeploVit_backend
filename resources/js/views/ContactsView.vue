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
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="name">Имя:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Сообщение:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="form_button">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
import MtsImage from '@/assets/images/mts.jpg'

export default {
    data() {
    return {
    images:
            {
                Mts: MtsImage
            }
        }
    },
}
</script>
