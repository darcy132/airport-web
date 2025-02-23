import { createApp } from 'vue';  // Import Vue 3's createApp
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);  // Use the router with Vue 3
app.mount('#app');
