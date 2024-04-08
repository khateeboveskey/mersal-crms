<template>
    <nav
        class="fixed bottom-0 z-10 flex h-fit w-screen flex-row justify-between rounded-t-xl bg-slate-100 px-4 md:static md:right-0 md:h-screen md:w-fit md:flex-col md:rounded-none md:rounded-e-xl dark:bg-slate-900">
        <section class="w-full justify-between align-middle">
            <BrandIdentity>
                <template #logo>
                    <MersalLogo class="me-2 w-11" />
                </template>
                <template #name>مِرسال</template>
            </BrandIdentity>
            <TabsGroup>
                <RouterLink
                    v-for="tab in tabs"
                    :key="tab.route"
                    :to="tab.route"
                    class="rounded-lg text-slate-600 hover:bg-slate-300 dark:hover:bg-slate-800"
                    active-class="active-router text-white shadow-lg shadow-primary-300 dark:shadow-primary-300 dark:shadow-primary-900 bg-primary-700 z-10">
                    <TabItem :title="tab.title">
                        <component :is="tab.icon"></component>
                    </TabItem>
                </RouterLink>
            </TabsGroup>
        </section>
        <section class="hidden md:block">
            <AppSidebarLinks>
                <a
                    class="h-min rounded-lg bg-transparent p-3 text-slate-400 hover:bg-slate-200 dark:text-slate-500 dark:hover:bg-slate-800"
                    href="https://github.com/khateeboveskey/mersal-crms"
                    target="_blank">
                    <LogoGithub class="w-7" />
                </a>
                <DarkModeSwitch
                    class="rounded-lg bg-transparent p-3 text-slate-400 hover:bg-slate-200 dark:text-slate-500 dark:hover:bg-slate-800" />
            </AppSidebarLinks>
        </section>
    </nav>
</template>

<script setup>
// Vue's
import { RouterLink } from 'vue-router';

import BrandIdentity from './BrandIdentity.vue';
import TabsGroup from './TabsGroup.vue';
import TabItem from './TabItem.vue';
import AppSidebarLinks from './AppSidebarLinks.vue';
import DarkModeSwitch from './DarkModeSwitch.vue';
import LogoGithub from './icons/LogoGithub.vue';

// Icons
import IconHome from './icons/IconHome.vue';
import IconUser from './icons/IconUser.vue';
import IconTag from './icons/IconTag.vue';
import MersalLogo from '@/assets/imgs/MersalLogo.vue';

// Data
const tabs = [
    {
        title: 'الرئيسية',
        route: '/',
        icon: IconHome,
    },
    {
        title: 'جهات الاتصال',
        route: '/contacts',
        icon: IconUser,
    },
    {
        title: 'العروض',
        route: '/deals',
        icon: IconTag,
    },
];
</script>

<style scoped>
.active-router:hover {
    @apply bg-primary-700 dark:bg-primary-700;
}
</style>
