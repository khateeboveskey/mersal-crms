<template>
    <div class="bg-gray-100 dark:bg-slate-950">
        <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <span
                class="flex flex-row items-center justify-between rounded-lg border bg-white py-3 pe-3 ps-5 text-black shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                v-for="(interest, index) in interests"
                :key="interest.id">
                <span>{{ interest.name }}</span>
                <button
                    class="rounded-lg p-3 hover:bg-red-100 dark:hover:bg-red-950"
                    @click="deleteLocation(interest.id, index)">
                    <IconDeleteTrash class="h-5 text-red-500" />
                </button>
            </span>
            <input
                v-model="newInterest.name"
                @keyup.enter="addLocation"
                placeholder="قم بإضافة عنوان"
                class="rounded-lg border-gray-200 bg-white p-5 text-black shadow-sm outline-none dark:border dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                type="text" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'redaxios';
import IconDeleteTrash from '@/components/icons/IconDeleteTrash.vue';

import { useInterest } from '@/stores/useInterest';

let interests = ref([]);

const interestData = useInterest();

let newInterest = ref({ name: '' });

async function addLocation() {
    console.log(interests.value);
    if (newInterest.value.name !== '') {
        interests.value.push({ name: newInterest.value.name });
        try {
            await axios.post('http://localhost:3000/interests', {
                name: newInterest.value.name,
            });
        } catch (error) {
            console.log(error);
        }
        newInterest.value.name = '';
    }
}

async function deleteLocation(id, index) {
    try {
        await axios.delete(`http://localhost:3000/interests/${id}`);
        interests.value.splice(index, 1);
    } catch (error) {
        console.error('Error deleting interest:', error);
    }
}

onMounted(async () => {
    if (interestData.interests) {
        console.log(interestData.interests);
        interests.value = interestData.interests;
    } else {
        console.log('Request Sent!');
        interests.value = await interestData.getInterests();
    }
});
</script>
