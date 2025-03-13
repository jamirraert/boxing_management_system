<script setup>
    import { RouterLink } from 'vue-router'
    import { reactive } from 'vue'
    import axiosClient from '@/composable/axios.js'
    import { useToast } from 'vue-toast-notification';
    import GuestOutlet from '@/outlet/GuestOutlet.vue'
    import CardComponent from '@/components/CardComponent.vue'
    import FormGroup from '@/components/FormGroup.vue'
    import { VueSpinner} from 'vue3-spinners';
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '@/store/user.js'
    import { useRouter } from 'vue-router';

    const toast = useToast()
    const router = useRouter()
    
    const form = reactive({
        email: '',
        password: ''
    })

    const state = reactive({
        user: null,
        isLoading: false,
        errorMsg: null
    })

    const handleSubmit = async () => {
        state.isLoading = true

        const payload = {
            email: form.email,
            password: form.password
        }

        try {
            await axiosClient.get('/sanctum/csrf-cookie')
            await axiosClient.post('/login', payload)
            const response = await axiosClient.get('/api/user')
            localStorage.setItem('user', JSON.stringify(response.data));
            router.push({name:'home'})
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed', { position: 'top-right' });
        } finally {
            state.isLoading = false
        }
    }
</script>

<template>
    <GuestOutlet>
        <CardComponent className="bg-white">
            {{ state.user }}
            <form @submit.prevent="handleSubmit">
                <h1 class="text-4xl text-blue-400 font-bold text-center mb-5">LOGIN</h1>
                <FormGroup>
                    <label for="email" class="text-gray-600 font-bold">Email</label>
                    <input 
                        type="text" 
                        name="email"
                        class="w-full box-border p-2 rounded border-2 border-gray-300"
                        v-model="form.email">
                </FormGroup>
                <FormGroup>
                    <label for="password" class="text-gray-600 font-bold">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        class="w-full box-border p-2 rounded border-2 border-gray-300"
                        v-model="form.password">
                </FormGroup>
                <FormGroup className="flex justify-end">
                    <button type="submit" class="bg-blue-400 p-2 text-white rounded">
                        <span v-if="state.isLoading">
                            <VueSpinner />
                        </span>
                        <span v-else>
                            Login
                        </span>
                    </button>
                </FormGroup>
                <FormGroup className="text-center mt-5">
                    <span>Not yet registered?</span>
                    <RouterLink :to="{name:'register'}" class="text-blue-300 hover:text-blue-400">
                        Signup here
                    </RouterLink>
                </FormGroup>
            </form>
        </CardComponent>
    </GuestOutlet>
</template>