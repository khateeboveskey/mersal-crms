<template>
    <div class="bg-gray-100 p-10 dark:bg-slate-950">
        <section class="mb-5 flex w-full flex-row justify-between gap-5">
            <div class="relative flex-auto">
                <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                    <SearchLens class="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="ابحث عن جهات الاتصال بالاسم، الرقم، الموقع ... إلخ"
                    v-model="searchValue" />
            </div>
            <button
                @click="showCreateModal = true"
                class="flex flex-row items-center gap-1 rounded-lg bg-primary-700 px-4 text-white transition duration-200 hover:bg-primary-800">
                <CreatePlus class="h-6 w-6 text-white" />
                <span class="hidden md:block">إضافة جهة اتصال</span>
            </button>
        </section>
        <DataTable :search-value="searchValue" />
        <ModalContainer
            title="إضافة جهة اتصال جديدة"
            @hide-modal="showCreateModal = false"
            v-show="showCreateModal"
            :show="showCreateModal">
            <CreateForm />
        </ModalContainer>
    </div>
</template>

<script setup>
import ModalContainer from '../components/ModalContainer.vue';
import CreateForm from '../components/CreateForm.vue';
import CreatePlus from '../components/icons/CreatePlus.vue';

import { ref } from 'vue';

let showCreateModal = ref(false);

// Components
import DataTable from '../components/DataTable.vue';
import SearchLens from '../components/icons/SearchLens.vue';

let searchValue = ref(null);
</script>
