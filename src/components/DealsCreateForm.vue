<template>
    <form @submit="sendData">
        <div class="relative grid max-h-full w-full max-w-md gap-4 sm:w-[28rem] sm:grid-cols-2">
            <div class="mb-2 block text-sm font-medium text-gray-400 sm:col-span-2">
                تشير علامة الـ
                <span class="required"></span>
                على أن الحقل إجباري
            </div>
            <FormField
                class="sm:col-span-2"
                label="العنوان"
                v-model="data.heading"
                required
                type="text" />
            <FormField
                class="sm:col-span-2"
                label="الوصف"
                v-model="data.description"
                required
                type="textarea" />
            <FormField
                class="sm:col-span-2"
                label="موعد الإرسال"
                v-model="data.datetime"
                type="datetime-local" />
            <div
                class="mb-2 flex select-none items-center gap-3 text-sm font-medium text-gray-900 sm:col-span-2 dark:text-white">
                <input
                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    type="checkbox"
                    v-model="data.is_annual"
                    id="is-annual-checkbox" />
                <label for="is-annual-checkbox">سنوياً</label>
                <span class="text-sm opacity-50">
                    في حالة التحفيز، سيتم إرسال الإعلان في نفس الموعد من كل سنة
                </span>
            </div>
            <FormField
                class="sm:col-span-2"
                dir="ltr"
                label="رابط الصورة المصغرة"
                v-model="data.image"
                type="url" />
            <div class="flex justify-center sm:col-span-2">
                <img class="rounded-lg" :src="data.image" alt="" />
            </div>
            <FormField
                class="sm:col-span-2"
                label="الوسوم"
                type="FormFieldCheckbox"
                :options-source="request.tags"
                @send-data-to-grand-parent="(dataArr) => (data.tag_ids = dataArr)" />
            <FormField
                class="sm:col-span-2"
                label="الاهتمامات المرتبطة بهذا العرض"
                type="FormFieldCheckbox"
                :options-source="request.interests"
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
import { useDateFormat } from '@vueuse/core';

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
    heading: '',
    description: '',
    datetime: '',
    is_annual: false,
    image: '',
    interest_ids: [],
    tag_ids: [],
});

async function sendData() {
    const formattedDateTime = useDateFormat(Date(data.datetime), 'YYYY-MM-DD HH:mm:ss');
    const cleanData = obj.getOnlyFilled({ ...data, datetime: formattedDateTime.value });
    console.log(cleanData);
    request.post('/deals', cleanData);
}

onMounted(async () => {
    locations.value = await request.get('/locations');
});
</script>
