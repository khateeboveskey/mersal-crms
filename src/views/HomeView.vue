<template>
    <div
        class="grid h-auto grid-cols-1 items-start gap-3 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 dark:bg-slate-950">
        <ChartBarLocations />
        <div class="grid gap-[inherit]">
            <ChartGrowNum chartTitle="عدد العملاء" :chartData="contacts.length" :icon="IconUser" />
            <ChartGrowNum
                chartTitle="عدد العروض النشطة"
                :chartData="deals.length"
                :icon="IconPrecentageCircle" />
            <ChartGrowNum
                chartTitle="عدد المديريات المسجلة"
                :chartData="locations.length"
                :icon="IconLocation" />
        </div>
    </div>
</template>

<script setup>
import IconUser from '@/components/icons/IconUser.vue';
import IconPrecentageCircle from '@/components/icons/IconPrecentageCircle.vue';
import IconLocation from '@/components/icons/IconLocation.vue';

import ChartBarLocations from '@/components/ChartBarLocations.vue';
import ChartGrowNum from '@/components/ChartGrowNum.vue';
import { useData } from '@/stores/useData';
import { onMounted, ref } from 'vue';
const request = useData();

const contacts = ref([]);
const deals = ref([]);
const locations = ref([]);

onMounted(async () => {
    contacts.value = await request.get('/contacts');
    deals.value = await request.get('/deals');
    locations.value = await request.get('/locations');
});
</script>
