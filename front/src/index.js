import Vue from 'vue'
import router from './router'
import store from './vuex/store.js'
import {
    Button,
    Select,
    Notification,
    Carousel,
    CarouselItem
} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.prototype.$notify = Notification

new Vue({
    router,
    store
}).$mount('#app')