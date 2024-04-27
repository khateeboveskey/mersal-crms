<template>
    <form @submit.prevent="sendData">
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
                    class="group flex flex-row items-center gap-1 rounded-lg bg-primary-700 px-5 py-2.5 ps-4 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:cursor-wait dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <CreatePlus class="h-5 w-5 text-white group-disabled:hidden" />
                    <span class="group-disabled:hidden">إضافة</span>
                    <div class="hidden group-disabled:block" role="status">
                        <svg
                            aria-hidden="true"
                            class="inline h-5 w-5 animate-spin fill-primary-500 text-gray-200 dark:fill-gray-300 dark:text-primary-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                    </div>
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
import { useData } from '@/stores/useData';

const request = useData();

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
    const submitBtn = document.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    const res = await request.post('/deals', { ...data, datetime: formattedDateTime.value });
    if (!res.error) {
        location.reload();
    } else {
        submitBtn.disabled = false;
    }
}

onMounted(async () => {
    locations.value = await request.get('/locations');
});
</script>
