<template>
    <main class="flex flex-row flex-nowrap">
        <aside class="bg-slate-900 rounded-e-xl h-screen right-0 p-2 w-fit">
            <BrandIdentity class="text-slate-50 m-7">
                <template #logo>
                    م
                </template>
                <template #name>
                    مِرسال
                </template>
            </BrandIdentity>
            <TabsGroup>
                <RouterLink to="/" :class="routerLinkClasses" :active-class="routerLinkActiveClasses">
                    <TabItem title="الرئيسية">
                        <ChartDonut />
                    </TabItem>
                </RouterLink>
                <RouterLink to="/contacts" :class="routerLinkClasses" :active-class="routerLinkActiveClasses">
                    <TabItem title="جهات الاتصال">
                        <TwoUsers />
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

const routerLinkActiveClasses = "bg-primary-500 hover:bg-primary-500 text-white shadow-lg shadow-primary-700";
const routerLinkClasses = "hover:bg-slate-800 rounded-lg text-slate-600";
</script>