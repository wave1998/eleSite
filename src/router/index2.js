import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import My from '../views/My.vue'
import Discover from '../views/Discover.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"home",
        component:Home,
    },
    {
        path:"/order",
        name:"order",
        component:Order,
    },
    {
        path:"/my",
        name:"my",
        component:My,
        meta:{
            isAuthor:true,
        }
    },
    {
        path:"/login",
        name:"login",
        component:Login,
        meta:{
            isHide:true,
        }
    },
    {
        path:"/discover",
        name:"discover",
        component:Discover,
        children:[
            {
                path:"/discover",
                name:"stapleFood",
                component:()=>import("@/views/discover/StapleFood")
            },
            {
                path:"/discover/NonStaplefood",
                name:"nonstapleFood",
                component:()=>import("@/views/discover/NonStapleFood")
            },
            {
                path:"/discover/snack",
                name:"snack",
                component:()=>import("@/views/discover/Snack")
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass:'red',
    routes
})

export default router
