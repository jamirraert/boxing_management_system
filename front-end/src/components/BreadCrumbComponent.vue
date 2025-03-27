<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb';
import { BreadCrumb } from '../items/bread-crumbs';

    const items = ref(BreadCrumb)
</script>
<template>
     <div class="flex flex-start mb-5">
       <small>
            <Breadcrumb :home="{ icon: 'pi pi-home' }" :model="items" />
       </small>
    </div>
</template>

<style scoped>
    .p-breadcrumb {
        background: none !important;
        box-shadow: none !important;
        padding: 0 !important;
    }
</style>