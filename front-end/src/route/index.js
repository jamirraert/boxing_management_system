import { createWebHistory, createRouter } from 'vue-router'

import UserOutlet from '../outlet/UserOutlet.vue'

import { useUserStore } from '@/store/user.js'
import { storeToRefs } from 'pinia'

import HomeView  from '../view/HomeView.vue'
import ProfileView from '../view/ProfileView.vue'

import LoginView from '../view/LoginView.vue'
import RegisterView from '../view/RegisterView.vue'
import NotFound from '../view/NotFound.vue'

const routes = [
    {
        path: '/',
        component: UserOutlet,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path:'/profile',
                name: 'profile',
                component: ProfileView
            }
        ],
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