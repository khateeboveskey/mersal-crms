<template>
    <form @submit="sendData">
        <div class="relative grid max-h-full max-w-md gap-4 sm:grid-cols-2 md:w-full">
            <div class="mb-2 block text-sm font-medium text-gray-400 sm:col-span-2">
                تشير علامة الـ
                <span class="required"></span>
                على أن الحقل إجباري
            </div>
            <FormField label="الاسم" v-model="data.name" required type="text" />
            <FormField label="رقم الهاتف" v-model="data.phoneNo" required type="number" />
            <FormField
                class="sm:col-span-2"
                dir="ltr"
                label="البريد الإلكتروني"
                v-model="data.email"
                required
                type="email" />
            <FormField label="تاريخ الميلاد" v-model="data.birthDate" type="date" />
            <FormField label="العنوان" v-model="data.address" type="text" />
            <FormField
                class="sm:col-span-2"
                label="روابط حسابات وسائل التواصل"
                v-model="data.address"
                type="FormFieldUrl"
                @send-data-to-grand-parent="updateDataSocialMedia" />
            <div class="sm:col-span-2">
                <label
                    for="description"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    الاهتمامات
                </label>
                <div
                    tabindex="0"
                    @focus.self="focusOnChildInput"
                    @click.self="focusOnChildInput"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pb-2 text-sm text-gray-900 hover:cursor-text focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <div class="flex flex-wrap items-center">
                        <span
                            v-for="interest in data.interests"
                            class="mb-1 me-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                            :key="interest">
                            <button @click.prevent="deleteInterest($event, interest)" class="mx-1">
                                <RemoveX class="h-3 w-3" />
                            </button>
                            {{ interest }}
                        </span>
                        <input
                            class="inline w-auto bg-transparent text-sm text-gray-900 focus:outline-none dark:text-white dark:placeholder-gray-400"
                            v-model="newInterest"
                            @keydown.delete="removeLastItem"
                            @keypress.enter.prevent
                            @keyup.enter="addInterest" />
                    </div>
                </div>
            </div>
            <div class="mt-5 flex items-center justify-end sm:col-span-2">
                <button
                    type="submit"
                    class="flex flex-row items-center gap-1 rounded-lg bg-primary-700 px-5 py-2.5 ps-4 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <CreatePlus class="h-5 w-5 text-white" />
                    <span>إضافة</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import axios from 'redaxios';

import FormField from './FormField.vue';
import CreatePlus from './icons/CreatePlus.vue';
import RemoveX from './icons/RemoveX.vue';
import { useObject } from '@/stores/useObject';

const obj = useObject();

// #region interests
const newInterest = ref('');

function addInterest() {
    if (newInterest.value === '') return;
    data.interests.push(newInterest.value);
    newInterest.value = '';
}

function deleteInterest(event, deletedInterest) {
    data.interests.splice(data.interests.indexOf(deletedInterest), 1);
}

function focusOnChildInput(event) {
    const parentDiv = event.target;
    const childInput = parentDiv.querySelector('input');
    childInput.focus();
}

function removeLastItem() {
    if (newInterest.value !== '') return;
    data.interests.pop();
}
// #endregion

const data = reactive({
    name: '',
    phoneNo: '',
    email: '',
    address: '',
    socialMediaLinks: {},
    interests: [],
    birthDate: '',
});

function updateDataSocialMedia(socialMediaObject) {
    data.socialMediaLinks = socialMediaObject;
    console.log(data);
}

watch(data, () => {
    obj.getOnlyFilled(data);
});

async function sendData() {
    try {
        const res = await axios.post(
            'http://localhost:3000/contacts',
            JSON.stringify(obj.getOnlyFilled(data)),
        );
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
</script>
