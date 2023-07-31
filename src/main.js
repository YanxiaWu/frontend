// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')




import App from './App.vue'
import Create from './components/AddProduct.vue'
import Edit from './components/EditProduct.vue'
import Index from './components/ProductList.vue'
import { createApp } from 'vue'



import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Index',
        path: '/',
        component: Index
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
