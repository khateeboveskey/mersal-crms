<template>
    <div class="bg-gray-100 dark:bg-slate-950">
        <section class="mb-5 flex w-full flex-row justify-between gap-5">
            <SearchBar v-model="searchValue" />
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
import ModalContainer from '@/components/ModalContainer.vue';
import CreateForm from '@/components/CreateForm.vue';
import CreatePlus from '@/components/icons/CreatePlus.vue';

import { ref } from 'vue';

let showCreateModal = ref(false);

// Components
import DataTable from '@/components/DataTable.vue';
import SearchBar from '@/components/SearchBar.vue';

let searchValue = ref(null);
</script>
