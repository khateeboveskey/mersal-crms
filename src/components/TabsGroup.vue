<template>
    <div class="md:mb-5 md:border-b md:border-slate-200 md:pb-5 md:last:border-0 md:dark:border-slate-800">
        <span v-if="props.title" class="text-slate-00 ms-4 mt-5 hidden md:block">
            {{ props.title }}
        </span>
        <div class="flex justify-around gap-3 md:flex-col md:justify-between">
            <slot>بدون عنوان</slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
});
</script>
