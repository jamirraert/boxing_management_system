<script setup>
    import { ref } from "vue";
    import Menu from 'primevue/menu';
    import { Menus } from "../items/menus";

    const items = ref(Menus);
</script>

<template>
    <div class="card flex justify-center mb-3">
        <Menu :model="items" />
    </div>
</template>