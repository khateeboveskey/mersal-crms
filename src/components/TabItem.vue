<template>
    <div class="flex flex-row items-center px-4 py-2">
        <span class="me-2">
            <slot></slot>
        </span>
        <span class="text-lg text-nowrap">{{ props.title }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

let props = defineProps({
    title: String
});
</script>