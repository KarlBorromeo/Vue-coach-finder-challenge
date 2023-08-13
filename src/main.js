import { createApp } from 'vue'
import store from './store/index.js'
import route from './route.js'

import App from './App.vue'
import baseCard from './components/baseComponents/baseCard.vue'
import baseButton from './components/baseComponents/baseButton.vue'

const app = createApp(App);


app.component('base-card',baseCard);
app.component('base-button',baseButton);
app.use(store);
app.use(route);
app.mount('#app');
