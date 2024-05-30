<template>
    <div class="flex flex-col flex-nowrap overflow-x-hidden md:flex-row">
        <AppSidebar v-if="auth.isAuthenticated" />
        <RouterView
            class="no-scrollbar md:after:content[''] h-screen w-full overflow-y-scroll p-10 md:after:absolute md:after:right-0 md:after:top-0 md:after:-z-10 md:after:h-[-webkit-fill-available] md:after:w-[inherit] md:after:bg-inherit" />
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import AppSidebar from './components/AppSidebar.vue';

import { useAuth } from './stores/useAuth';
const auth = useAuth();
</script>
