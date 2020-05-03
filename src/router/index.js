import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import My from '../views/My.vue'
import Discover from '../views/Discover.vue'
import Login from '../views/Login'
import Index from '../views/Index'
import Location from '../views/Location'
import SearchShop from "../views/SearchShop";
import ShopDetail from "../views/ShopDetail";
import ShopList from "../views/ShopList";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            }, {
                path: "/order",
                name: "order",
                component: Order,
            }, {
                path: "/discover",
                name: "discover",
                component: Discover,
                children: [
                    {
                        path: "/discover",
                        name: "stapleFood",
                        component: () => import("@/views/discover/StapleFood")
                    },
                    {
                        path: "/discover/NonStaplefood",
                        name: "nonstapleFood",
                        component: () => import("@/views/discover/NonStapleFood")
                    },
                    {
                        path: "/discover/snack",
                        name: "snack",
                        component: () => import("@/views/discover/Snack")
                    },
                ]
            }, {
                path: "/my",
                name: "my",
                component: My,
                // meta:{
                //     isAuthor:true
                // }
            },{
                path:"/location",
                name:"location",
                component:Location,
            },{
                path:"/searchShop",
                name:"searchShop",
                component:SearchShop,
            },{
                path:"/shopDetail",
                name:"shopDetail",
                component:ShopDetail,
            },{
                path:"/shopList",
                name:"ShopList",
                component:ShopList,
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'is-selected',
    routes
})

export default router
