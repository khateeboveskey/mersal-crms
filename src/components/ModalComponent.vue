<template>
    <transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-200"
        leave-to-class="opacity-0">
        <div
            v-show="props.show"
            class="fixed inset-0 z-50 grid h-screen max-h-full w-screen place-items-center items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-950 bg-opacity-50">
            <transition
                enter-from-class="opacity-0 scale-75"
                enter-active-class="transition duration-200"
                leave-active-class="transition duration-200"
                leave-to-class="opacity-0 scale-75">
                <div class="relative max-h-full w-full max-w-md p-4" v-show="props.show">
                    <div class="relative rounded-lg bg-white px-12 py-2 shadow dark:bg-gray-700">
                        <div class="p-4 text-center md:p-5">
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                هل أنت متأكد من الحذف؟
                            </h3>
                            <div class="flex flex-nowrap justify-center">
                                <button
                                    @click="emit('hideModal')"
                                    type="button"
                                    class="me-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                    إلغاء
                                </button>
                                <button
                                    @click="deleteContact"
                                    type="button"
                                    class="inline-flex items-center rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 dark:focus:ring-red-400">
                                    <IconDeleteTrash class="me-2 h-5 w-5 text-white" />
                                    تأكيد
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import axios from 'redaxios';

import IconDeleteTrash from '../components/icons/IconDeleteTrash.vue';
const props = defineProps({
    show: { type: Boolean, default: false },
    contactId: {
        type: String,
    },
});
const emit = defineEmits(['hideModal', 'hideFromList']);

function deleteContact() {
    axios.delete('http://localhost:3000/contacts/' + props.contactId);
    emit('hideModal');
    emit('hideFromList', props.contactId);
}
</script>
