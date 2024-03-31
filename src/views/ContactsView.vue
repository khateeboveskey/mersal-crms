<template>
    <div class="bg-slate-50 p-10 dark:bg-slate-950">
        <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                <SearchLens class="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
                type="search"
                id="default-search"
                class="mb-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="ابحث عن جهات الاتصال بالاسم، الرقم، الموقع ... إلخ"
                v-model="searchValue" />
        </div>
        <DataTable :search-value="searchValue" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Components
import DataTable from '../components/DataTable.vue';
import SearchLens from '../components/icons/SearchLens.vue';

let searchValue = ref(null);
</script>
