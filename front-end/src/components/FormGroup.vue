<script setup>
    import { defineProps } from 'vue'

    defineProps({
        className: ''
    })
</script>
<template>
    <div class="w-4/5 mx-auto my-4 overflow-hidden space-y-3"
        :class="className">
        <slot></slot>
    </div>
</template>