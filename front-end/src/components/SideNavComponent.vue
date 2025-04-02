<script setup>
    import { ref, computed } from "vue";
    import Menu from 'primevue/menu';
    import { useUserStore } from "../store/user";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    const { menu } = userStore
   
    const items = computed(() => {
        const menus = ref(menu[user.value.role]);
        let formattedMenus = [];

        menus.value.forEach((item) => {
            formattedMenus.push({
                label: item.name,
                icon: item.icon,
                to: {name: item.name}
            });
        });

      const  newMenus = [
           {
            label: "Pages",
            items: formattedMenus
           }
        ]

        return newMenus;
    });
</script>

<template>
    <div class="card flex justify-center mb-3">
        <Menu :model="items">
            <template #item="{ item, props }">
                <a v-ripple class="flex items-center" v-bind="props.action" 
                   :href="item.to ? undefined : '#'" 
                   v-if="item.to">
                    <router-link v-bind="props.action" :to="item.to">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </router-link>
                </a>
                <a v-ripple class="flex items-center" v-bind="props.action" 
                   v-else @click="navigate(item.to)">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>