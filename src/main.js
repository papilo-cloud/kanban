import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragscroll from "vue-dragscroll";

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  })

createApp(App).use(VueDragscroll).use(router).use(store).mount('#app')
