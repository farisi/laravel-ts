//require('./bootstrap');
// import  './bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus";

const app = createApp(App)
.use(ElementPlus);
app.mount('#app');