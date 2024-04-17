<template>
    <select
        v-model="selectedOption"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
        <option selected hidden disabled>قم باختيار العنوان</option>
        <option v-for="optionItem in props.optionsSource" :key="optionItem.id">
            {{ optionItem.name }}
        </option>
    </select>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const emit = defineEmits(['sendDataToParent']);

/**
 * optionsSource data comes from
 * ContactsCreateForm.vue -> FormField.vue -> FormFieldSelect.vue
 * GrandParent-Child Communaction data should be
 * provide()-d from the GrandParent (ContactsCreateForm.vue)
 * and inject()-ed from Child (FormFieldSelect.vue)
 * see https://vuejs.org/guide/components/provide-inject.html
 * but this is not working
 */
// todo: fix provide() and inject() functionality
const props = defineProps({
    optionsSource: Array,
});

const selectedOption = ref('قم باختيار العنوان');

const selectedOptionId = computed(() => {
    if (!selectedOption.value) return '';
    const selectedOptionObject = props.optionsSource.find(
        (obj) => obj.name === selectedOption.value,
    );
    return selectedOptionObject?.id;
});

watch(selectedOption, () => {
    emit('sendDataToParent', selectedOptionId.value.toString());
});
</script>
