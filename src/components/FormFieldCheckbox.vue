<template>
    <div>
        <span v-for="listItem in listArr" :key="listItem.id">
            <input
                class="peer hidden"
                @change="pushId($event, listItem.id)"
                :id="`${props.list}-${listItem.id}`"
                type="checkbox" />
            <label
                class="m-1 inline-flex select-none items-center rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-800 transition duration-100 hover:cursor-pointer peer-checked:bg-primary-200 dark:bg-gray-900 dark:text-gray-300 peer-checked:dark:bg-primary-950"
                :for="`${props.list}-${listItem.id}`">
                <RemoveX class="me-1 h-3 w-3 rotate-45 transition duration-100" />
                {{ listItem.name }}
            </label>
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RemoveX from './icons/RemoveX.vue';

const emit = defineEmits(['sendDataToParent']);

const props = defineProps({
    list: String,
});

const listArr = ref([]);
const checkedinterest_ids = ref([]);

function pushId(event, interestId) {
    if (event.target.checked) {
        checkedinterest_ids.value.push(interestId.toString());
    } else {
        checkedinterest_ids.value.splice(checkedinterest_ids.value.indexOf(interestId), 1);
    }
    emit('sendDataToParent', checkedinterest_ids.value);
}

import { useData } from '@/stores/useData';
const request = useData();

onMounted(async () => {
    listArr.value = await request.get(props.list);
});
</script>

<style>
input:checked + label > .rotate-45 {
    @apply rotate-0;
}
</style>
