import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ObserveVisibility } from 'vue-observe-visibility'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .use(router)
    .directive('observe-visibility', ObserveVisibility)
    .mount('#app')
