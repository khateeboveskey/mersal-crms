<template>
    <div class="flex flex-row items-center p-4 md:py-2">
        <span :style="`width: ${setting.sizeInRem}rem`" :class="`md:me-2`">
            <!-- Icon Slot -->
            <slot></slot>
        </span>
        <!-- Tab Title -->
        <span class="hidden text-nowrap text-lg md:block">{{ props.title }}</span>
    </div>
</template>

<script setup>
import { useIconsSettingStore } from '@/stores/useIconsSettingStore';

let props = defineProps({
    title: String
});

const setting = useIconsSettingStore();
</script>
