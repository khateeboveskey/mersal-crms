<template>
    <button @click="toggleDark()">
        <IconSun class="w-7" v-if="isDark" />
        <IconMoon class="w-7" v-else />
    </button>
</template>

<script setup>
// #region imports
import IconSun from './icons/IconSun.vue';
import IconMoon from './icons/IconMoon.vue';
import { useDark, useToggle } from '@vueuse/core';
// #endregion
    
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
