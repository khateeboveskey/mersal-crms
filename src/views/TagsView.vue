<template>
    <div class="bg-gray-100 dark:bg-slate-950">
        <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <span
                class="flex flex-row items-center justify-between rounded-lg border bg-white py-3 pe-3 ps-5 text-black shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:text-white"
                v-for="(tag, index) in tags"
                :key="tag.id">
                <span>{{ tag.name }}</span>
                <button
                    class="rounded-lg p-3 hover:bg-red-100 dark:hover:bg-red-950"
                    @click="deleteTag(tag.id, index)">
                    <IconDeleteTrash class="h-5 text-red-500" />
                </button>
            </span>
            <input
                v-model="newTag.name"
                @keyup.enter="addTag"
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

let tags = ref([]);

let newTag = ref({ name: '' });

async function addTag() {
    console.log(tags.value);
    if (newTag.value.name !== '') {
        tags.value.push({ name: newTag.value.name });
        await request.post('/tags', {
            name: newTag.value.name,
        });
        newTag.value.name = '';
    }
}

async function deleteTag(id, index) {
    await request.delete('/tags', id);
    tags.value.splice(index, 1);
}

onMounted(async () => {
    tags.value = await request.get('/tags');
});
</script>
