<template>
    <div class="w-full max-w-sm rounded-lg bg-white p-4 text-white shadow md:p-6 dark:bg-gray-800">
        <h5 class="mb-3 text-xl text-gray-500">{{ props.chartTitle }}</h5>
        <div class="flex flex-row gap-2">
            <component class="h-10 text-slate-600 dark:text-white" :is="props.icon"></component>
            <p class="text-4xl font-bold text-slate-600 dark:text-white">{{ props.chartData }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    chartTitle: String,
    chartData: Number,
    icon: String,
});
</script>
