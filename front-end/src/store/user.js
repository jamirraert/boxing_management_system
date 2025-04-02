import { defineStore } from 'pinia'
import { ref, watch } from 'vue';
import { useMenu } from '../composable/menu';

export const useUserStore = defineStore('user', () => {
    const storedUser = localStorage.getItem('user')
    const user = ref(storedUser ? JSON.parse(storedUser) : {})
    const { groupByActor } = useMenu()
    const menu = groupByActor(user.value.role)

    watch(user, (newUser) => {
        localStorage.setItem('user', JSON.stringify(newUser))
    }, {deep: true })

    return {user, menu}
})