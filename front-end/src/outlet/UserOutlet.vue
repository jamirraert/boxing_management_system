<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user';
import { provide } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import SideNavComponent from '../components/SideNavComponent.vue';
import OutletComponent from '../components/OutletComponent.vue';

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

provide('user', user)
</script>

<template>
    <HeaderComponent />
    <OutletComponent >
        <template #content>
            <RouterView />
        </template>
    </OutletComponent>
</template>