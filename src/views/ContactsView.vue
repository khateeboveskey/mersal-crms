<template>
    <div class="bg-gray-100 dark:bg-slate-950">
        <section class="mb-5 flex w-full flex-row justify-between gap-5">
            <SearchBar
                placeholder="ابحث عن جهات الاتصال بالاسم، الرقم، الموقع ... إلخ"
                v-model="searchValue" />
            <button
                @click="showCreateModal = true"
                class="flex flex-row items-center gap-1 rounded-lg bg-primary-700 px-4 text-white transition duration-200 hover:bg-primary-800">
                <CreatePlus class="h-6 w-6 text-white" />
                <span class="hidden md:block">إضافة جهة اتصال</span>
            </button>
        </section>
        <ContactsDataTable :search-value="searchValue" />
        <ModalContainer
            title="إضافة جهة اتصال جديدة"
            @hide-modal="showCreateModal = false"
            v-show="showCreateModal"
            :show="showCreateModal">
            <ContactsCreateForm />
        </ModalContainer>
    </div>
</template>

<script setup>
import ModalContainer from '@/components/ModalContainer.vue';
import ContactsCreateForm from '@/components/ContactsCreateForm.vue';
import CreatePlus from '@/components/icons/CreatePlus.vue';

import { ref } from 'vue';

let showCreateModal = ref(false);

// Components
import ContactsDataTable from '@/components/ContactsDataTable.vue';
import SearchBar from '@/components/SearchBar.vue';

let searchValue = ref(null);
</script>
