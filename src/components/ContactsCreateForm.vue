<template>
    <form @submit="sendData">
        <div class="relative grid max-h-full w-full max-w-md gap-4 sm:w-[28rem] sm:grid-cols-2">
            <div class="mb-2 block text-sm font-medium text-gray-400 sm:col-span-2">
                تشير علامة الـ
                <span class="required"></span>
                على أن الحقل إجباري
            </div>
            <FormField label="الاسم" v-model="data.name" required type="text" />
            <FormField label="رقم الهاتف" v-model="data.phone" required type="number" />
            <FormField
                class="sm:col-span-2"
                dir="ltr"
                label="البريد الإلكتروني"
                v-model="data.email"
                required
                type="email" />
            <FormField label="تاريخ الميلاد" v-model="data.birth_date" type="date" />
            <FormField
                label="العنوان"
                :options-source="request.locations"
                @send-data-to-grand-parent="(optionId) => (data.location_id = optionId)"
                type="FormFieldSelect" />
            <FormField
                class="sm:col-span-2"
                label="روابط حسابات وسائل التواصل"
                type="FormFieldUrl"
                @send-data-to-grand-parent="(dataObj) => (data.social_media_links = dataObj)" />
            <FormField
                class="sm:col-span-2"
                label="الاهتمامات"
                type="FormFieldCheckbox"
                @send-data-to-grand-parent="(dataArr) => (data.interest_ids = dataArr)" />
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
// Vue's
import { reactive, onMounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';

// Components
import FormField from './FormField.vue';
import CreatePlus from './icons/CreatePlus.vue';

// Stores
import { useObject } from '@/stores/useObject';
import { useData } from '@/stores/useData';

const request = useData();
const obj = useObject();

const locations = ref([]);
const data = reactive({
    name: '',
    phone: '',
    email: '',
    location_id: '',
    social_media_links: {},
    interest_ids: [],
    birth_date: '',
});

async function sendData() {
    const cleanData = obj.getOnlyFilled({ ...data, phone: data.phone.toString() });
    console.log(cleanData);
    request.post('/contacts', cleanData);
}

onMounted(() => {
    initFlowbite();
});

onMounted(async () => {
    locations.value = await request.get('/locations');
});
</script>
