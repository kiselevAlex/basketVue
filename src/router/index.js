import Vue from 'vue'
import Router from 'vue-router'
import NoDelay from '@/components/Cart/NoDelay/List'
import Delay from '@/components/Cart/Delay/List'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/personal/cart/vue/dist',
            name: 'NoDelay',
            component: NoDelay
        },
        {
            path: '/personal/cart/vue/dist/delay',
            name: 'Delay',
            component: Delay
        },
        {
            path: '*',
            redirect: {
                name: 'NoDelay'
            }
        }
    ]
})
