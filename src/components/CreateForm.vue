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
            {{ data.birthDate }}
            <br />
            <FormField label="تاريخ الميلاد" v-model="data.birthDate" type="date" />
            <FormField
                label="العنوان"
                :options-source="locations"
                @send-data-to-grand-parent="updateDataAddressId"
                type="FormFieldSelect" />
            <FormField
                class="sm:col-span-2"
                label="روابط حسابات وسائل التواصل"
                type="FormFieldUrl"
                @send-data-to-grand-parent="updateDataSocialMedia" />
            <FormField
                class="sm:col-span-2"
                label="الاهتمامات"
                @send-data-to-grand-parent="updateDataInterests"
                type="FormFieldCheckbox" />
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
import { reactive, onMounted, ref } from 'vue';
import axios from 'redaxios';

import FormField from './FormField.vue';
import CreatePlus from './icons/CreatePlus.vue';
import { useObject } from '@/stores/useObject';
import { useLocationsData } from '@/stores/useLocationsData';
import { useDateFormat } from '@vueuse/core';

const obj = useObject();
const locationData = useLocationsData();

const data = reactive({
    name: '',
    phoneNo: '',
    email: '',
    addressId: '',
    socialMediaLinks: {},
    interestsIds: [],
    birthDate: '',
});

function updateDataSocialMedia(socialMediaObject) {
    data.socialMediaLinks = socialMediaObject;
}

function updateDataAddressId(selectedOptionId) {
    /**
     * todo: make Id as Number
     */
    data.addressId = selectedOptionId;
}

function updateDataInterests(interestsArray) {
    data.interestsIds = interestsArray;
}

async function sendData() {
    const cleanData = obj.getOnlyFilled({
        ...data,
        birthDate: useDateFormat(data.birthDate, 'YYYY-M-D').value,
    });
    try {
        await axios.post('http://localhost:3000/contacts', JSON.stringify(cleanData));
    } catch (error) {
        alert('Error: ' + error);
        console.error(error);
    }
}

const locations = ref([]);

onMounted(async () => {
    locations.value = await locationData.getLocations();
});
</script>
