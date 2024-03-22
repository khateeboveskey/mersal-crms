<template>
    <div class="mt-8">
        <span class="text-slate-700">{{ props.title }}</span>
        <div class="flex flex-col gap-3">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
});
</script>
