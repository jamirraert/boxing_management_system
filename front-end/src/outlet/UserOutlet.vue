<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user';
import { provide, ref, onMounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import OutletComponent from '../components/OutletComponent.vue';
import LoadingSkeleton from '../skeletons/LoadingSkeleton.vue';

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

provide('user', user)

const isLoading = ref(true)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 3000)
})
</script>

<template>
    <template v-if="isLoading">
        <LoadingSkeleton />
    </template>
    <template v-else>
        <HeaderComponent />
        <OutletComponent >
            <template #content>
                <RouterView />
            </template>
        </OutletComponent>
    </template>
</template>