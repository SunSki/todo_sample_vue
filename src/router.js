import Vue from 'vue'
import VueRouter from 'vue-router'

import TaskList from '@/pages/TaskList.vue'

import './assets/scss/TaskList.scss'

Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        {
            path:'/',
            component:TaskList
        }
    ]
});

export default router;