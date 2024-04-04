<template>
    <transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-200"
        leave-to-class="opacity-0">
        <div
            v-show="props.showCreateModal"
            class="fixed inset-0 z-50 grid h-screen max-h-full w-screen place-items-center items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-950 bg-opacity-50">
            <transition
                enter-from-class="opacity-0 scale-75"
                enter-active-class="transition duration-200"
                leave-active-class="transition duration-200"
                leave-to-class="opacity-0 scale-75">
                <form @submit="sendData" v-show="props.showCreateModal">
                    <div
                        class="relative mx-4 mb-4 grid max-h-full w-screen max-w-md gap-4 rounded-lg bg-white p-10 shadow dark:bg-gray-700 sm:grid-cols-2 md:w-full">
                        <!-- Modal Body -->
                        <div class="mb-2 block text-sm font-medium text-gray-400 sm:col-span-2">
                            تشير علامة الـ
                            <span class="required"></span>
                            على أن الحقل إجباري
                        </div>
                        <div>
                            <label
                                for="name"
                                class="required mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                الاسم
                            </label>
                            <input
                                v-model="data.name"
                                required
                                type="text"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                        </div>
                        <div>
                            <label
                                class="required mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                رقم الهاتف
                            </label>
                            <input
                                v-model="data.phoneNo"
                                required
                                min="9"
                                type="number"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="description"
                                class="required mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                البريد الإلكتروني
                            </label>
                            <input
                                v-model="data.email"
                                dir="ltr"
                                required
                                type="email"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                        </div>
                        <div>
                            <label
                                for="name"
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                تاريخ الميلاد
                            </label>
                            <input
                                v-model="data.birthDate"
                                type="date"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                        </div>
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                العنوان
                            </label>
                            <input
                                v-model="data.address"
                                type="text"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                روابط حسابات وسائل التواصل
                            </label>
                            <div class="flex flex-col gap-2">
                                <span
                                    v-for="(socialMediaLinkInput, index) in 3"
                                    :key="socialMediaLinkInput"
                                    dir="ltr"
                                    class="flex flex-row items-center gap-2">
                                    <component
                                        class="h-6 w-6 text-gray-400"
                                        :is="socialMediaIcons[index].value"></component>
                                    <input
                                        @input="changeSocialMediaIcon($event, index)"
                                        type="text"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                                </span>
                            </div>
                        </div>
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
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pb-2 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <div class="flex flex-wrap items-center">
                                    <span
                                        v-for="interest in data.interests"
                                        class="mb-1 me-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                                        :key="interest">
                                        <button
                                            @click.prevent="deleteInterest($event, interest)"
                                            class="mx-1">
                                            x
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
                            <div class="mt-5 flex items-center justify-end sm:col-span-2">
                                <button
                                    type="submit"
                                    class="flex flex-row items-center gap-1 rounded-lg bg-primary-700 px-5 py-2.5 ps-4 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <CreatePlus class="h-5 w-5 text-white" />
                                    <span>إضافة</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted, ref, markRaw, reactive } from 'vue';

import { useUrl } from '@/stores/useUrl';
import { useHttp } from '@/stores/useHttp';

const urlRegex = useUrl();
const request = useHttp();

const props = defineProps({
    showCreateModal: Boolean
});

onMounted(() => {
    initFlowbite();
});

import InternetEarth from './icons/InternetEarth.vue';
import LogoInstagram from './icons/LogoInstagram.vue';
import LogoFacebook from './icons/LogoFacebook.vue';
import LogoGithub from './icons/LogoGithub.vue';
import LogoTwitter from './icons/LogoTwitter.vue';
import LogoTelegram from './icons/LogoTelegram.vue';
import LogoSnapchat from './icons/LogoSnapchat.vue';
import CreatePlus from './icons/CreatePlus.vue';

const socialMediaIcons = [
    ref(markRaw(InternetEarth)),
    ref(markRaw(InternetEarth)),
    ref(markRaw(InternetEarth))
];

function changeSocialMediaIcon(event, index) {
    // Extract the social media name from the input URLasd
    const socialMediaName = urlRegex.extractWebsiteName(event.target.value);
    switch (socialMediaName) {
        case 'Instagram':
            socialMediaIcons[index].value = markRaw(LogoInstagram);
            break;
        case 'Facebook':
            socialMediaIcons[index].value = markRaw(LogoFacebook);
            break;
        case 'Github':
            socialMediaIcons[index].value = markRaw(LogoGithub);
            break;
        case 'Twitter':
            socialMediaIcons[index].value = markRaw(LogoTwitter);
            break;
        case 'Telegram':
            socialMediaIcons[index].value = markRaw(LogoTelegram);
            break;
        case 'Snapchat':
            socialMediaIcons[index].value = markRaw(LogoSnapchat);
            break;
        default:
            socialMediaIcons[index].value = markRaw(InternetEarth);
    }
}

const newInterest = ref('');

function addInterest() {
    if (newInterest.value === '') return;
    console.log('ADD');
    data.interests.push(newInterest.value);
    newInterest.value = '';
}

function deleteInterest(event, deletedInterest) {
    data.interests.splice(data.interests.indexOf(deletedInterest), 1);
}

const data = reactive({
    name: '',
    phoneNo: '',
    email: '',
    address: '',
    interests: [],
    birthDate: ''
});

function focusOnChildInput(event) {
    const parentDiv = event.target;
    const childInput = parentDiv.querySelector('input');
    childInput.focus();
}

function removeLastItem() {
    if (newInterest.value !== '') return;
    data.interests.pop();
}

function sendData() {
    request.post('http://localhost:3000/contacts', data);
}
</script>
