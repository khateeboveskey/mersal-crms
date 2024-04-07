<template>
    <transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-200"
        leave-to-class="opacity-0">
        <div
            v-show="props.show"
            class="max-w-screen fixed inset-0 z-50 grid h-screen max-h-full place-items-center items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-950 bg-opacity-50">
            <transition
                enter-from-class="opacity-0 scale-90	"
                enter-active-class="transition duration-200"
                leave-active-class="transition duration-200"
                leave-to-class="opacity-0 scale-90	">
                <div
                    class="max-w-screen w-screen sm:w-auto rounded-lg bg-white p-10 shadow dark:bg-gray-700 md:my-5"
                    v-show="props.show">
                    <div
                        class="mb-3 flex items-center justify-between border-b pb-3 dark:border-gray-600 sm:col-span-2">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ props.title }}
                        </h3>
                        <button
                            @click="emit('hideModal')"
                            type="button"
                            class="ms-auto inline-flex items-center justify-center rounded-lg bg-transparent p-1 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                            <RemoveX class="h-6" />
                            <span class="sr-only">إغلاق</span>
                        </button>
                    </div>
                    <slot>محتوى المودال</slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import RemoveX from './icons/RemoveX.vue';

const props = defineProps({
    show: Boolean,
    title: String,
});

const emit = defineEmits(['hideModal']);
</script>
