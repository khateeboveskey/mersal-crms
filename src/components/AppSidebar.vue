<template>
    <main class="flex flex-row flex-nowrap">
        <aside class="right-0 h-screen w-fit rounded-e-xl bg-slate-900 p-2">
            <BrandIdentity class="m-7 text-slate-50">
                <template #logo>م </template>
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
        </aside>
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

// Icons
import ChartDonut from './icons/ChartDonut.vue';
import TwoUsers from './icons/TwoUsers.vue';
import DealTag from './icons/DealTag.vue';

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
// [x] fix `hover:bg-primary-500` not working
const routerLinkActiveClasses =
    'active-router-link bg-primary-500 text-white shadow-lg shadow-primary-700';
</script>

<style>
.active-router-link:hover {
    @apply bg-primary-500;
}
</style>
