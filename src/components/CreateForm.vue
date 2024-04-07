<template>
    <form @submit="sendData">
        <div class="relative grid max-h-full w-full max-w-md gap-4 sm:w-[28rem] sm:grid-cols-2">
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
                type="FormFieldUrl"
                @send-data-to-grand-parent="updateDataSocialMedia" />
            <FormField
                class="sm:col-span-2"
                label="الاهتمامات"
                type="FormFieldTags"
                @send-data-to-grand-parent="updateDataInterests" />
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
import { reactive, watch } from 'vue';
import axios from 'redaxios';

import FormField from './FormField.vue';
import CreatePlus from './icons/CreatePlus.vue';
import { useObject } from '@/stores/useObject';

const obj = useObject();

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
}

function updateDataInterests(interestsArray) {
    data.interests = interestsArray;
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
