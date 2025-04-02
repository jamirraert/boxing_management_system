<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import Breadcrumb from 'primevue/breadcrumb';

const route = useRoute();

console.log(route.name)

    const items = ref([
        {label: route.name}
    ])

    watch(route, (newRoute) => {
        items.value = [{label: newRoute.name}]
    }, { immediate: true })
</script>
<template>
     <div class="flex flex-start mb-5">
       <small>
            <Breadcrumb :home="{ icon: route.meta.icon }" :model="items" />
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