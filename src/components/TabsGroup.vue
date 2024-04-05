<template>
    <div class="my-5 md:mt-8">
        <span class="hidden text-slate-700 md:block">{{ props.title }}</span>
        <div class="flex justify-around gap-3 md:flex-col md:justify-between">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
});
</script>
