<template>
    <div class="flex flex-col flex-nowrap md:flex-row">
        <AppSidebar />
        <RouterView class="no-scrollbar h-screen w-full overflow-scroll" />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AppSidebar from './components/AppSidebar.vue';
</script>
