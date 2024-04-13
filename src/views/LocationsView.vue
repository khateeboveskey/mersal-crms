<template>
    <div class="bg-gray-100 dark:bg-slate-950">
        <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <span
                class="flex flex-row items-center justify-between rounded-lg border bg-white py-3 pe-3 ps-5 text-black shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                v-for="(location, index) in locations"
                :key="location.id">
                <span>{{ location.name }}</span>
                <button
                    class="rounded-lg p-3 hover:bg-red-100 dark:hover:bg-red-950"
                    @click="deleteLocation(location.id, index)">
                    <IconDeleteTrash class="h-5 text-red-500" />
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
import IconDeleteTrash from '@/components/icons/IconDeleteTrash.vue';
import { useData } from '@/stores/useData';
const request = useData();

let locations = ref([]);

let newLocation = ref({ name: '' });

async function addLocation() {
    console.log(locations.value);
    if (newLocation.value.name !== '') {
        locations.value.push({ name: newLocation.value.name });
        await request.post('locations', {
            name: newLocation.value.name,
        });
        newLocation.value.name = '';
    }
}

async function deleteLocation(id, index) {
    await request.delete(`locations/${id}`);
    locations.value.splice(index, 1);
}

onMounted(async () => {
    locations.value = await request.get('locations');
});
</script>
