<template>
    <div
        tabindex="0"
        @focus.self="focusOnChildInput"
        @click.self="focusOnChildInput"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pb-2 text-sm text-gray-900 hover:cursor-text focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
        <div class="flex w-full flex-wrap items-center">
            <span
                v-for="interest in interests"
                class="mb-1 me-1 inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                :key="interest">
                <button @click="deleteInterest($event, interest)" class="mx-1">
                    <RemoveX class="h-3 w-3" />
                </button>
                {{ interest }}
            </span>
            <input
                class="inline max-w-prose bg-transparent text-sm text-gray-900 focus:outline-none dark:text-white dark:placeholder-gray-400"
                v-model="newInterest"
                @keydown.delete="
                    removeLastItem();
                    sendDataToParent();
                "
                :style="`width: ${(newInterest.length + 1) * 10}px;`"
                @keypress.enter="changeWidth($event)"
                @keyup.enter="
                    addInterest();
                    sendDataToParent();
                " />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import RemoveX from './icons/RemoveX.vue';

const emit = defineEmits(['sendDataToParent']);

const newInterest = ref('');
const interests = reactive([]);

function addInterest() {
    if (newInterest.value === '') return;
    interests.push(newInterest.value);
    newInterest.value = '';
}

function deleteInterest(event, deletedInterest) {
    interests.splice(interests.indexOf(deletedInterest), 1);
}

function focusOnChildInput(event) {
    const parentDiv = event.target;
    const childInput = parentDiv.querySelector('input');
    childInput.focus();
}

function removeLastItem() {
    if (newInterest.value !== '') return;
    interests.pop();
}

function sendDataToParent() {
    emit('sendDataToParent', interests);
}

function changeWidth(event) {
    event.target.style.width = (event.target.value.length + 1) * 8 + 'px';
}
</script>
