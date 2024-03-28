<template>
    <div class="flex flex-col flex-nowrap overflow-x-hidden md:flex-row">
        <AppSidebar />
        <RouterView class="no-scrollbar h-screen w-full overflow-y-scroll" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import AppSidebar from './components/AppSidebar.vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
    initFlowbite();
});
</script>
