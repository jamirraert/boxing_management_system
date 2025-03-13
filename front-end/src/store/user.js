import { defineStore } from 'pinia'
import { ref, watch } from 'vue';

export const useUserStore = defineStore('user', () => {
    const storedUser = localStorage.getItem('user')
    const user = ref(storedUser ? JSON.parse(storedUser) : {})

    watch(user, (newUser) => {
        localStorage.setItem('user', JSON.stringify(newUser))
    }, {deep: true })

    return {user}
})