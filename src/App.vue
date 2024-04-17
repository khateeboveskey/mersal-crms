<template>
    <div class="flex flex-col flex-nowrap overflow-x-hidden md:flex-row">
        <AppSidebar v-if="!isInLogin" />
        <RouterView
            class="no-scrollbar after:content[''] h-screen w-full overflow-y-scroll p-10 after:absolute after:right-0 after:top-0 after:-z-10 after:h-[-webkit-fill-available] after:w-[inherit] after:bg-inherit" />
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import AppSidebar from './components/AppSidebar.vue';
const isInLogin = location.href.includes('/login');
</script>
