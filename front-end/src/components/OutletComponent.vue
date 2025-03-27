<script setup>

import SideNavComponent from './SideNavComponent.vue';
import BreadCrumbComponent from './BreadCrumbComponent.vue';

</script>

<template>
    <div class="h-screen w-full flex">
        <div class="border p-3 w-[25%]">
            <SideNavComponent />
        </div>
        <div class="border w-full p-3 box-border overflow-x-hidden">
            <BreadCrumbComponent />
            <slot name="content" />
        </div>
    </div>
</template>