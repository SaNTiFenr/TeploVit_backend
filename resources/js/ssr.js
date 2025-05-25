/* global var process from node */
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

import router from './router/Index.js';
import App from './App.vue';

(async function main() {
  const requestUrl = process.argv[2] || '/';

  const app = createSSRApp(App);
  app.use(router);

  // Пушим путь в router, если перешли на компонент напрямую
  await router.push(requestUrl);
  await router.isReady();

  const html = await renderToString(app);
  process.stdout.write(html);
})()
