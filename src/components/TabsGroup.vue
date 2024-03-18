<template>
    <div class="mt-10">
        <span class="text-slate-700">{{ props.title }}</span>
        <div class="flex flex-col gap-2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String
});
</script>