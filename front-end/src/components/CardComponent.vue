<script setup>
    import { defineProps } from 'vue'

    defineProps({ className: '' })
</script>
<template>
    <div class="shadow rounded p-3 w-1/2"
        :class="className">
        <slot></slot>
    </div>
</template>