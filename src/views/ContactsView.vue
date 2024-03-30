<template>
    <div class="bg-slate-50 p-10 dark:bg-slate-950">
        <div class="relative overflow-x-auto rounded-lg shadow-lg">
            <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead
                    class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800" />
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">الاسم</th>
                        <th scope="col" class="px-6 py-3">الرقم</th>
                        <th scope="col" class="px-6 py-3">حسابات مواقع التواصل</th>
                        <th scope="col" class="px-6 py-3">تاريخ الميلاد</th>
                        <th scope="col" class="px-6 py-3">العنوان</th>
                        <th scope="col" class="px-6 py-3">الاهتمامات</th>
                        <th scope="col" class="px-6 py-3">الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(contact, index) in contacts"
                        :key="contact.id"
                        class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800" />
                                <label for="checkbox-table-search-1" class="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                            <img
                                class="h-10 w-10 rounded-full"
                                :src="`https://i.pravatar.cc/100?img=${index}`" />
                            <div class="ps-3">
                                <div class="mb-1 text-base font-semibold">{{ contact.name }}</div>
                                <a target="_blank" :href="'mailto:' + contact.email">
                                    <div class="font-normal text-gray-500 hover:underline">
                                        {{ contact.email }}
                                    </div>
                                </a>
                            </div>
                        </th>
                        <td class="px-6 py-4">{{ contact.phoneNo }}</td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <a target="_blank" class="rounded-lg p-2 hover:bg-gray-700" href="">
                                    <LogoInstagram />
                                </a>
                                <a target="_blank" class="rounded-lg p-2 hover:bg-gray-700" href="">
                                    <LogoFacebook />
                                </a>
                            </div>
                        </td>
                        <td class="px-6 py-4">{{ contact.birthDate }}</td>
                        <td class="px-6 py-4">{{ contact.address }}</td>
                        <td class="px-6 py-4">
                            <span
                                v-for="interest in contact.interests"
                                :key="interest"
                                class="mb-1 me-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                                {{ interest }}
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="inline-flex rounded-md shadow-sm" role="group">
                                <button
                                    type="button"
                                    class="inline-flex items-center rounded-s-lg border border-gray-200 px-4 py-2 text-sm font-medium text-primary-500 focus:z-10 focus:text-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:hover:bg-primary-950 dark:focus:ring-primary-500">
                                    <EditPen class="me-2" />
                                    تعديل
                                </button>
                                <button
                                    @click="showModal = !showModal"
                                    type="button"
                                    class="dark:text-red inline-flex items-center rounded-e-lg border border-s-0 border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500 hover:text-red-700 focus:z-10 focus:text-red-700 focus:ring-2 focus:ring-red-700 dark:border-gray-700 dark:hover:bg-red-950 dark:hover:text-red-500 dark:focus:text-red-500 dark:focus:ring-red-500">
                                    <DeleteTrash class="me-2" />
                                    حذف
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <ModalComponent :show="showModal" @hide-modal="showModal = false" />
</template>

<script setup>
// Icons
import DeleteTrash from '../components/icons/DeleteTrash.vue';
import EditPen from '../components/icons/EditPen.vue';
import LogoInstagram from '../components/icons/LogoInstagram.vue';
import LogoFacebook from '../components/icons/LogoFacebook.vue';

// Components
import ModalComponent from '../components/ModalComponent.vue';

// Libraries
import axios from 'redaxios';

// Vue's
import { onMounted, ref } from 'vue';

// Data
const contacts = ref(null);
let showModal = ref(false);

// Methods
async function fetchData() {
    try {
        const res = await axios('http://localhost:3000/contacts');
        const data = res.data;
        contacts.value = data;
    } catch (error) {
        console.error('Axios error: ' + error);
    }
}

// Lifecycle Hooks
onMounted(() => {
    fetchData();
});
</script>
