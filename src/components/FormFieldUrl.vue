<template>
    <div class="flex flex-col gap-2 sm:col-span-2">
        <span
            v-for="(socialMediaLinkInput, index) in 3"
            :key="socialMediaLinkInput"
            dir="ltr"
            class="flex flex-row items-center gap-2">
            <component
                class="h-6 w-6 text-gray-400 dark:text-gray-400"
                :is="socialMediaIcons[index].value"></component>
            <input
                :id="props.id"
                :required="props.required"
                v-model="social_media_links[index]"
                @input="
                    changeSocialMediaIcon($event, index);
                    sendDataToParent();
                "
                type="url"
                class="w-full flex-grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
        </span>
    </div>
</template>

<script setup>
import { ref, markRaw, reactive, watch } from 'vue';
import InternetEarth from './icons/InternetEarth.vue';
import { useUrl } from '@/stores/useUrl';
import { useIcon } from '@/stores/useIcon';
import { useObject } from '@/stores/useObject';

const urlRegex = useUrl();
const icon = useIcon();
const obj = useObject();

const props = defineProps({
    required: Boolean,
    id: String,
});

const emit = defineEmits(['sendDataToParent']);

const socialMediaIcons = [
    ref(markRaw(InternetEarth)),
    ref(markRaw(InternetEarth)),
    ref(markRaw(InternetEarth)),
];

function changeSocialMediaIcon(event, index) {
    const socialMediaName = urlRegex.extractWebsiteName(event.target.value);
    socialMediaIcons[index].value = icon.getSocialMediaIconComponent(socialMediaName);
}

const social_media_links = reactive([]);
let socialMediaObject = reactive({});

watch(social_media_links, () => {
    socialMediaObject = {};
    social_media_links.forEach((url) => {
        if (url !== '') {
            if (urlRegex.extractWebsiteName(url) === '') {
                socialMediaObject[url] = url;
            } else {
                socialMediaObject[urlRegex.extractWebsiteName(url)] = url;
            }
        }
    });
});

function sendDataToParent() {
    emit('sendDataToParent', JSON.stringify(obj.getOnlyFilled(socialMediaObject)));
}
</script>
