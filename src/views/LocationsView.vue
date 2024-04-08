<template>
    <div class="bg-gray-100 dark:bg-slate-950">
        <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <span
                class="flex flex-row justify-between rounded-lg border bg-white p-5 text-black shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                v-for="(location, index) in locations"
                :key="location.id">
                <span>{{ location.name }}</span>
                <button @click="deleteLocation(location.id, index)">
                    <IconDeleteTrash class="h-full text-red-500" />
                </button>
            </span>
            <input
                v-model="newLocation.name"
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

let locations = ref([]);

async function getLocations() {
    try {
        const res = await axios.get('http://localhost:3000/locations');
        locations.value = res.data;
    } catch (error) {
        console.error('Error retrieving contacts:', error);
    }
}

let newLocation = ref({ name: '' });

async function addLocation() {
    console.log(locations.value);
    if (newLocation.value.name !== '') {
        locations.value.push({ name: newLocation.value.name });
        try {
            await axios.post('http://localhost:3000/locations', {
                name: newLocation.value.name,
            });
        } catch (error) {
            console.log(error);
        }
        newLocation.value.name = '';
    }
}

async function deleteLocation(id, index) {
    try {
        await axios.delete(`http://localhost:3000/locations/${id}`);
        locations.value.splice(index, 1);
        console.log('Hi');
    } catch (error) {
        console.error('Error deleting location:', error);
    }
}

onMounted(() => {
    getLocations();
});
</script>
