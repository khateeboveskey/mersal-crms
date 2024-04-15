<template>
    <div>
        <span v-if="props.title" class="text-slate-00 ms-4 mt-5 hidden md:block">
            {{ props.title }}
        </span>
        <div class="flex justify-around gap-3 md:flex-col md:justify-between">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
});
</script>
