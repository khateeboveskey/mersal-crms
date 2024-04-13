<template>
    <div dir="rtl">
        <label
            :for="props.id"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            :class="{ required: required }">
            {{ props.label }}
        </label>
        <input
            v-if="isHTMLInputType"
            v-bind="$attrs"
            :id="props.id"
            :dir="props.dir"
            v-model="model"
            :required="props.required"
            :type="props.type"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" />
        <component
            :data="dataFromGrandParent"
            v-else
            :id="props.id"
            :is="getComponenet(props.type)"
            v-bind="{ required: props.required }"
            :options-source="props.optionsSource"
            @send-data-to-parent="sendToGrandParent"></component>
    </div>
</template>

<script setup>
import FormFieldUrl from './FormFieldUrl.vue';
import FormFieldTags from './FormFieldTags.vue';
import FormFieldSelect from './FormFieldSelect.vue';
import FormFieldCheckbox from './FormFieldCheckbox.vue';

function getComponenet(componentName) {
    switch (componentName) {
        case 'FormFieldUrl':
            return FormFieldUrl;
        case 'FormFieldTags':
            return FormFieldTags;
        case 'FormFieldSelect':
            return FormFieldSelect;
        case 'FormFieldCheckbox':
            return FormFieldCheckbox;
        default:
            break;
    }
}

const props = defineProps({
    type: String,
    required: Boolean,
    id: String,
    label: String,
    dir: String,
    /**
     * optionsSource data comes from
     * CreateForm.vue -> FormField.vue -> FormFieldSelect.vue
     * GrandParent-Child Communaction data should be
     * provide()-d from the GrandParent (CreateForm.vue)
     * and inject()-ed from Child (FormFieldSelect.vue)
     * see https://vuejs.org/guide/components/provide-inject.html
     * but this is not working
     * todo: fix provide() and inject() functionality
     */
    optionsSource: Array,
});

const model = defineModel();

const emit = defineEmits(['sendDataToGrandParent']);

function sendToGrandParent(sentData) {
    emit('sendDataToGrandParent', sentData);
}

const isHTMLInputType =
    props.type === 'button' ||
    props.type === 'checkbox' ||
    props.type === 'color' ||
    props.type === 'date' ||
    props.type === 'datetime-local' ||
    props.type === 'email' ||
    props.type === 'file' ||
    props.type === 'hidden' ||
    props.type === 'image' ||
    props.type === 'month' ||
    props.type === 'number' ||
    props.type === 'password' ||
    props.type === 'radio' ||
    props.type === 'range' ||
    props.type === 'reset' ||
    props.type === 'search' ||
    props.type === 'submit' ||
    props.type === 'tel' ||
    props.type === 'text' ||
    props.type === 'time' ||
    props.type === 'url' ||
    props.type === 'week';
</script>
