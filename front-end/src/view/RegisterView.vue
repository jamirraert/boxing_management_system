<script setup>
    import { RouterLink } from 'vue-router'
    import { reactive } from 'vue'

    import axiosClient from '@/composable/axios.js'

    import { useToast } from 'vue-toast-notification';

    import GuestOutlet from '@/outlet/GuestOutlet.vue'
    import CardComponent from '@/components/CardComponent.vue'
    import FormGroup from '@/components/FormGroup.vue'
    import { useUserStore } from '../store/user';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';


    const toast = useToast()
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore) 
    const router = useRouter()
    
    const form = reactive({
        fname: '',
        mname: '',
        lname: '',
        email: '',
        password: '',
        password_confirm: ''
    })

    const initForm = () => {
        form.fname = '',
        form.mname = '',
        form.lname = '',
        form.email = '',
        form.password = '',
        form.password_confirm = ''
    }

    const state = reactive({
        isLoading: false,
        errorMsg: null
    })

    const handleSubmit = async () => {
        state.isLoading = true

        const payload = {
            first_name: form.fname,
            middle_name: form.mname,
            last_name: form.lname,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirm
        }

        try {
            await axiosClient.get('/sanctum/csrf-cookie')
            await axiosClient.post('/register', JSON.stringify(payload))
            const response = await axiosClient.get('/api/user')
            user.value = response.data
            router.push({name: 'home'})
            toast.success('Successfully logedin', {position: 'top-right'})
        } catch (error) {
            toast.error(error.response.data.message, {position: 'top-right'})
        } finally {
            state.isLoading = false
            initForm()
        }
    }
</script>

<template>
    <GuestOutlet>
        <CardComponent className="bg-white">
            <form @submit.prevent="handleSubmit">
                <h1 class="text-4xl text-blue-400 font-bold text-center mb-5">Register</h1>
                <FormGroup>
                    <label for="first_name" class="text-gray-600 font-bold">First Name</label>
                    <input 
                        type="text" 
                        name="first_name"
                        class="w-full box-border p-2 rounded border-2 border-gray-300"
                        v-model="form.fname">
                </FormGroup>
                <FormGroup>
                    <label for="middle_name" class="text-gray-600 font-bold">Middle Name</label>
                    <input 
                        type="text"
                        name="middle_name"
                        class="w-full box-border p-2 rounded border-2 border-gray-300"
                        v-model="form.mname">
                </FormGroup>
                <FormGroup>
                    <label for="last_name" class="text-gray-600 font-bold">Last Name</label>
                    <input 
                        type="text" 
                        name="last_name"
                        class="w-full box-border p-2 rounded border-2 border-gray-300"
                        v-model="form.lname">
                </FormGroup>
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
                <FormGroup>
                    <label for="confirm_password" class="text-gray-600 font-bold">Confirm  Password</label>
                    <input 
                        type="password" 
                        name="confirm_password"
                        class="w-full box-border p-2 rounded border-2 border-gray-300"
                        v-model="form.password_confirm">
                </FormGroup>
                <FormGroup className="flex justify-end">
                        <button type="submit" class="bg-blue-400 p-2 text-white rounded">
                        <span v-if="state.isLoading">
                             Loading <VueSpinner class="inline-block"/>
                        </span>
                        <span v-else>
                            Register
                        </span>
                    </button>
                </FormGroup>
                <FormGroup className="text-center mt-5">
                    <span>Already have an account?</span>
                    <RouterLink :to="{name:'login'}" class="text-blue-300 hover:text-blue-400">
                        Signin here
                    </RouterLink>
                </FormGroup>
            </form>
        </CardComponent>
    </GuestOutlet>
</template>