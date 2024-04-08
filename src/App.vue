<template>
    <div class="flex flex-col flex-nowrap overflow-x-hidden md:flex-row">
        <AppSidebar />
        <RouterView
            class="no-scrollbar after:content[''] h-screen w-full overflow-y-scroll p-10 after:absolute after:right-0 after:top-0 after:-z-10 after:h-[-webkit-fill-available] after:w-[inherit] after:bg-inherit" />
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
