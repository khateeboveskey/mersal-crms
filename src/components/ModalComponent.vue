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
                            <svg
                                class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                هل أنت متأكد من الحذف؟
                            </h3>
                            <div class="flex flex-nowrap justify-center">
                                <button
                                    @click="emit('hideModal')"
                                    type="button"
                                    class="me-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                    إلغاء
                                </button>
                                <button
                                    type="button"
                                    class="inline-flex items-center rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 dark:focus:ring-red-400">
                                    <DeleteTrash class="me-2 h-5 w-5 text-white" />
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
import DeleteTrash from '../components/icons/DeleteTrash.vue';
const props = defineProps({
    show: { type: Boolean, default: false }
});
const emit = defineEmits(['hideModal']);
</script>
