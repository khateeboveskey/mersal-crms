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
                <form action="#" v-show="props.showCreateModal">
                    <div
                        class="relative mx-4 mb-4 grid max-h-full w-screen max-w-md gap-4 rounded-lg bg-white p-10 shadow dark:bg-gray-700 sm:grid-cols-2 md:w-full">
                        <!-- Modal Body -->
                        <div>
                            <label
                                for="name"
                                class="required mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                الاسم
                            </label>
                            <input
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
                                required
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
                                type="date"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                        </div>
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                العنوان
                            </label>
                            <input
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
                                        type="url"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                                </span>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label
                                for="description"
                                class="block text-sm font-medium text-gray-900 dark:text-white">
                                الاهتمامات
                            </label>
                            <span class="text-xs text-gray-400">
                                يرجى فصل الاهتمامات عن بعضها بعلامة الفاصلة (،)
                            </span>
                            <textarea
                                id="description"
                                rows="4"
                                class="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                placeholder="مثال: بحري، مشويات، عيد الأم، عيد الحب"></textarea>
                        </div>
                        <div class="flex items-center justify-end sm:col-span-2">
                            <button
                                type="submit"
                                class="flex flex-row items-center gap-1 rounded-lg bg-primary-700 px-5 py-2.5 ps-4 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <CreatePlus class="h-5 w-5 text-white" />
                                <span>إضافة</span>
                            </button>
                        </div>
                    </div>
                </form>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted, ref, markRaw } from 'vue';

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

/**
 * Extracts only the website name from a url
 * @example "Twitter" from "https://twitter.com/example"
 * @param {string} url the link to extract the name from
 * @returns Website name
 */
function extractWebsiteName(url) {
    if (url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:([^./]+)\.)?([^./]+\.com)/;
        const matches = url.match(regex);
        const [, subdomain, domain] = matches;
        let socialMediaName = subdomain
            ? subdomain.charAt(0).toUpperCase() + subdomain.slice(1)
            : domain.charAt(0).toUpperCase() + domain.slice(1);
        socialMediaName = socialMediaName.replace(/\.[^/.]+$/, '');
        return socialMediaName; // Remove the top-level domain
    } else {
        return '';
    }
}

function changeSocialMediaIcon(event, index) {
    // Extract the social media name from the input URL
    const socialMediaName = extractWebsiteName(event.target.value);
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
</script>
