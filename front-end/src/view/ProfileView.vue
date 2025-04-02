<script setup>
    import { inject, computed } from 'vue';
    const user = inject('user')

    const name = computed(() => {
        let  name = user.value.first_name + ' ' +
            (user.value.middle_name || '') + ' ' +
            user.value.last_name

            return name
    })
</script>
<template>
    <div class="p-2">
        <card>
            <template #title>
                <span class="text-blue-500">Basic Information</span>
            </template>
        </card>
        <div class="flex space-x-3 my-3">
            <div class="border-4 border-white shadow-lg overflow-hidden w-40 h-40">
                <img src="../assets/images/profile-picture.jpg" alt="Profile" class="w-full h-full object-cover" />
            </div>
            <card class="flex-grow">
                <template #content>
                    <div class="flex flex-col space-y-2">
                        <h1 class="text-2xl font-bold capitalize">
                        <span class="mr-2">
                            <i class="pi pi-user"></i>
                        </span>
                            {{ name }}
                        </h1>
                        <p class="font-bold">
                            <span class="mr-2">
                                <i class="pi pi-envelope"></i>
                            </span>
                            {{ user.email }}
                        </p>
                        <p class="capitalize font-semibold">
                            <i class="pi pi-verified"></i>
                            User type: {{ user.role }}
                        </p>
                        <p class="font-semibold">
                            <i class="pi pi-folder-plus"></i>
                            Created At: {{ user.created_at }}
                        </p>
                    </div>
                </template>
            </card>
        </div>
        <card>
            <template #title>
                <span class="text-blue-500">Other Information</span>
            </template>
        </card>
    </div>
    
  </template>
  
  