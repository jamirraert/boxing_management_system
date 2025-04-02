import HomeView  from '@/view/HomeView.vue'
import ProfileView from '@/view/ProfileView.vue'

export const Menus = [
    {
        name: "dashboard", 
        path: "/", 
        actor: ["admin", "user"],
        icon: "pi pi-home",
        component: HomeView
    },
    {
        name: "profile", 
        path: "/profile",
        actor: ["admin", "user"],
        icon: "pi pi-user",
        component: ProfileView
    }
]