import { createWebHistory, createRouter } from 'vue-router'
import UserOutlet from '../outlet/UserOutlet.vue'

import { useUserStore } from '@/store/user.js'
import { storeToRefs } from 'pinia'

import LoginView from '../view/LoginView.vue'
import RegisterView from '../view/RegisterView.vue'
import NotFound from '../view/NotFound.vue'

import { Menus } from '@/items/menus.js'

const menus = Menus
let modifiedMenus = []

menus.forEach(menu => {
    modifiedMenus.push({
        path: menu.path,
        name: menu.name,
        component: menu.component,
        meta: {
            icon: menu.icon
        }
    })
})

const routes = [
    {
        path: '/',
        component: UserOutlet,
        children: modifiedMenus,
        beforeEnter: (to, from, next) => {
            const useStore = useUserStore()
            const { user } = storeToRefs(useStore)

            if (!user.value || Object.keys(user.value).length === 0) {
                return next({ name: 'login' });
            }
            
            next()
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'notfound', 
        component: NotFound 
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})