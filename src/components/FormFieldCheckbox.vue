<template>
    <div>
        <span v-for="interest in interests" :key="interest.id">
            <input
                class="peer hidden"
                @change="pushId($event, interest.id)"
                :id="`interest-${interest.id}`"
                type="checkbox" />
            <label
                class="mb-1 ms-2 inline-flex select-none items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-800 transition duration-100 hover:cursor-pointer peer-checked:bg-primary-200 dark:bg-gray-900 dark:text-gray-300 peer-checked:dark:bg-primary-950"
                :for="`interest-${interest.id}`">
                <RemoveX class="me-1 h-3 w-3 rotate-45 transition duration-100" />
                {{ interest.name }}
            </label>
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useInterest } from '@/stores/useInterest';
import RemoveX from './icons/RemoveX.vue';

const emit = defineEmits(['sendDataToParent']);

const interests = ref([]);
const checkedInterestsIds = ref([]);
const interestData = useInterest();

function pushId(event, interestId) {
    if (event.target.checked) {
        checkedInterestsIds.value.push(interestId);
    } else {
        checkedInterestsIds.value.splice(checkedInterestsIds.value.indexOf(interestId), 1);
    }
    emit('sendDataToParent', checkedInterestsIds.value);
}

onMounted(async () => {
    if (interestData.interests) {
        interests.value = interestData.interests;
    } else {
        interests.value = await interestData.getInterests();
    }
});
</script>

<style>
input:checked + label > .rotate-45 {
    @apply rotate-0;
}
</style>
