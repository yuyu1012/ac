import Home from '../pages/Home'
import List from '../pages/List'
import Buy from '../pages/Buy'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Serach from '../pages/Search'
import emailLogin from '../pages/emailLogin/emailLogin.vue'
import Personal from '../pages/Personal/Personal.vue'
export default [
    {
        path: '/',
        component: Home,
        name: "home"
    },
    {
        path: '/list',
        component: List,
        name: "list"
    },
    {
        path: '/buy',
        component: Buy,
        name: "buy"
    },
    {
        path: '/cart',
        component: Cart,
        name: "cart"
    },
    {
        path: '/login',
        component: Login,
        name: "login"
    },
    {
        path: '/search',
        component: Serach,
        name: "Serach"
    },
    {
        path: '/personal',
        component: Personal,
        name: "Personal"
    },
    { path: "/emailLogin", component: emailLogin },
]