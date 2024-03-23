<template>
    <main class="flex flex-col flex-nowrap overflow-hidden md:flex-row">
        <nav
            class="absolute bottom-0 z-10 flex h-fit w-screen flex-row justify-between rounded-t-xl bg-slate-900 px-4 md:static md:right-0 md:h-screen md:w-fit md:flex-col md:rounded-none md:rounded-e-xl">
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
                        :class="routerLinkClasses"
                        :active-class="routerLinkActiveClasses">
                        <TabItem :title="tab.title">
                            <component :is="tab.icon"></component>
                        </TabItem>
                    </RouterLink>
                </TabsGroup>
            </section>
            <section class="hidden md:block">
                <AppSidebarLinks>
                    <a
                        class="rounded-lg bg-transparent p-4 text-slate-500 hover:bg-slate-800"
                        href="https://github.com/khateeboveskey/mersal-crms"
                        target="_blank">
                        <BrandGithub class="w-7" />
                    </a>
                </AppSidebarLinks>
            </section>
        </nav>
        <main class="w-full">
            <RouterView />
        </main>
    </main>
</template>

<script setup>
// Vue's
import { RouterLink, RouterView } from 'vue-router';

// Components
import BrandIdentity from './BrandIdentity.vue';
import TabsGroup from './TabsGroup.vue';
import TabItem from './TabItem.vue';
import AppSidebarLinks from './AppSidebarLinks.vue';
import BrandGithub from './icons/BrandGithub.vue';

// Icons
import ChartDonut from './icons/ChartDonut.vue';
import TwoUsers from './icons/TwoUsers.vue';
import DealTag from './icons/DealTag.vue';
import MersalLogo from '@/assets/imgs/MersalLogo.vue';

// Data
const tabs = [
    {
        title: 'الرئيسية',
        route: '/',
        icon: ChartDonut
    },
    {
        title: 'جهات الاتصال',
        route: '/contacts',
        icon: TwoUsers
    },
    {
        title: 'العروض',
        route: '/deals',
        icon: DealTag
    }
];
const routerLinkClasses = 'hover:bg-slate-800 rounded-lg text-slate-600';
// [x] fix `hover:bg-indigo-700` not working
const routerLinkActiveClasses =
    'active-router-link bg-indigo-700 text-white shadow-lg shadow-indigo-900';
</script>

<style>
.active-router-link:hover {
    @apply bg-indigo-700;
}
</style>
