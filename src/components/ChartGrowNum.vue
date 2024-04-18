<template>
    <div class="w-full max-w-sm rounded-lg bg-white p-4 text-white shadow md:p-6 dark:bg-gray-800">
            <span class="text-gray-500">{{ props.chartTitle }}</span>
            <component :is="DataIcon"></component>
            <p>{{ props.chartData }}</p>
    </div>
</template>

<script setup>
import { markRaw } from 'vue';
import IconUser from './icons/IconUser.vue';

const props = defineProps({
    chartTitle: String,
    chartData: Number,
    icon: String,
});

const DataIcon = () => {
    switch (props.icon) {
        case 'IconUser':
            return markRaw(IconUser);
        default:
            return markRaw(IconUser);
    }
};
</script>
