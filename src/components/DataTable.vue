<template>
    <div class="relative overflow-x-auto overflow-y-hidden rounded-lg">
        <table
            v-if="contactsDataSource"
            class="w-full text-left text-sm text-gray-500 shadow-lg rtl:text-right dark:text-gray-400">
            <thead
                class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">الاسم</th>
                    <th scope="col" class="px-6 py-3">الرقم</th>
                    <th scope="col" class="px-6 py-3">حسابات مواقع التواصل</th>
                    <th scope="col" class="px-6 py-3">تاريخ الميلاد</th>
                    <th scope="col" class="px-6 py-3">العنوان</th>
                    <th scope="col" class="px-6 py-3">الاهتمامات</th>
                    <th
                        scope="col"
                        :class="{ 'rounded-e-lg': !contactsDataSource }"
                        class="px-6 py-3">
                        الإجراءات
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="contact in contactsDataSource"
                    :key="contact.id"
                    v-show="contact.id !== hiddenContactId"
                    class="border-b bg-white transition duration-300 last:border-0 dark:border-gray-700 dark:bg-gray-800">
                    <td
                        scope="row"
                        class="flex items-center whitespace-nowrap py-4 pe-6 ps-3 text-gray-900 dark:text-white">
                        <div class="ps-3">
                            <div class="mb-1 text-base font-semibold">{{ contact.name }}</div>
                            <a target="_blank" :href="'mailto:' + contact.email">
                                <div class="font-normal text-gray-500 hover:underline">
                                    {{ contact.email }}
                                </div>
                            </a>
                        </div>
                    </td>
                    <td class="px-6 py-4">{{ contact.phoneNo }}</td>
                    <td class="px-6 py-4">
                        <div class="flex items-center">
                            <a
                                v-for="socialMediaLink in contact.socialMediaLinks"
                                :key="socialMediaLink"
                                target="_blank"
                                class="rounded-lg p-2 text-slate-400 hover:bg-gray-100 dark:text-slate-500 dark:hover:bg-gray-700"
                                :href="socialMediaLink">
                                <component
                                    class="h-5 w-5"
                                    :is="changeSocialMediaIcon(socialMediaLink)"></component>
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
                                class="inline-flex items-center rounded-s-lg border border-gray-200 px-4 py-2 text-sm font-medium text-primary-500 hover:bg-primary-100 focus:z-10 focus:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:hover:bg-primary-950 dark:focus:ring-primary-500">
                                <IconPenEdit class="me-2 h-5 w-5 text-primary-500" />
                                تعديل
                            </button>
                            <button
                                @click="deleteContact(contact.id)"
                                type="button"
                                class="inline-flex items-center rounded-e-lg border border-s-0 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:text-red-500 dark:hover:bg-red-950 dark:hover:text-red-500 dark:focus:text-red-500">
                                <IconDeleteTrash class="me-2 h-5 w-5 text-red-500" />
                                حذف
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- "!isResultFound" would accept null as true -->
        <span v-else-if="isResultFound === false" class="grid place-items-center p-5 text-gray-500">
            عذراً، لم يتم العثور على نتائج
        </span>
        <span v-else class="grid animate-pulse place-items-center p-5 text-gray-500">
            جاري التحميل...
        </span>
    </div>
    <ModalComponent
        :contactId="contactToDeleteId"
        :show="showModal"
        @hide-modal="showModal = false"
        @hide-from-list="hide" />
</template>

<script setup>
import ModalComponent from '../components/ModalComponent.vue';

// Icons
import IconDeleteTrash from '../components/icons/IconDeleteTrash.vue';
import IconPenEdit from '../components/icons/IconPenEdit.vue';

// Stores
import { useUrl } from '@/stores/useUrl';
import { useIcon } from '@/stores/useIcon';

const urlRegex = useUrl();
const icon = useIcon();

// Vue's
import { onMounted, ref, computed, watch } from 'vue';
import axios from 'redaxios';

// Data
const contacts = ref(null);
const isResultFound = ref(null);

let showModal = ref(false);
let hiddenContactId = ref();
let contactToDeleteId = ref(null);

async function getContacts() {
    try {
        const res = await axios.get('http://localhost:3000/contacts');
        contacts.value = res.data;
    } catch (error) {
        console.error('Error retrieving contacts:', error);
    }
}

function deleteContact(contactId) {
    showModal.value = true;
    contactToDeleteId.value = contactId;
}

function hide(c) {
    hiddenContactId.value = c;
}

const props = defineProps({
    searchValue: String,
});

const searchResult = computed(() => {
    if (!contacts.value) return []; // Guard against null value
    return contacts.value.filter(
        (c) =>
            (c.name && c.name.includes(props.searchValue)) ||
            (c.phoneNo && c.phoneNo.toString().includes(props.searchValue)) ||
            (c.email && c.email.includes(props.searchValue)) ||
            (c.address && c.address.includes(props.searchValue)) ||
            (c.interests && c.interests.join('، ').includes(props.searchValue)) ||
            (c.birthDate && c.birthDate.includes(props.searchValue)),
    );
});

let contactsDataSource = computed(() => {
    if (isResultFound.value) {
        return searchResult.value;
    } else if (searchResult.value.length === 0 && props.searchValue !== null) {
        return;
    } else {
        return contacts.value;
    }
});

watch(searchResult, () => {
    if (searchResult.value.length > 0) {
        isResultFound.value = true;
    } else if (searchResult.value.length === 0 && props.searchValue !== null) {
        isResultFound.value = false;
    }
});

function changeSocialMediaIcon(socialMediaLink) {
    const socialMediaName = urlRegex.extractWebsiteName(socialMediaLink);
    return icon.getSocialMediaIconComponent(socialMediaName);
}

// Lifecycle Hooks
onMounted(() => {
    getContacts();
});
</script>
