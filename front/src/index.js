import Vue from 'vue'
import router from './router'
import store from './vuex/index.js'

import {
    Carousel,
    CarouselItem
} from 'element-ui'

Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)

new Vue({
    router,
    store
}).$mount('#app')