<template>
    <div class="flex flex-row items-center px-4 py-2">
        <span :style="`width: ${setting.sizeInRem}rem`" :class="`me-2`">
            <!-- Icon Slot -->
            <slot></slot>
        </span>
        <span class="text-nowrap text-lg">{{ props.title }}</span>
    </div>
</template>

<script setup>
import { useIconsSettingStore } from '@/stores/useIconsSettingStore';

let props = defineProps({
    title: String
});

const setting = useIconsSettingStore();
</script>
