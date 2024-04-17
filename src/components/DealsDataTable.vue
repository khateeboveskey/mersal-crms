<template>
    <div
        :class="{ border: dealsDataSource }"
        class="group relative overflow-x-auto overflow-y-hidden rounded-lg border-gray-300 dark:border-gray-700">
        <table
            v-if="dealsDataSource"
            class="w-full text-left text-sm text-gray-500 shadow rtl:text-right dark:text-gray-400">
            <thead
                class="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">الصورة</th>
                    <th scope="col" class="px-6 py-3">العنوان</th>
                    <th scope="col" class="px-6 py-3">الوصف</th>
                    <th scope="col" class="px-6 py-3">التاريخ والوقت</th>
                    <th scope="col" class="px-6 py-3">سنوي</th>
                    <th scope="col" class="px-6 py-3">الوسوم</th>
                    <th scope="col" class="px-6 py-3">الاهتمامات</th>
                    <th scope="col" :class="{ 'rounded-e-lg': !dealsDataSource }" class="px-6 py-3">
                        الإجراءات
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-300 dark:divide-gray-700">
                <tr
                    v-for="deal in dealsDataSource"
                    :key="deal.id"
                    v-show="deal.id !== hiddenDealId"
                    class="bg-white transition duration-300 dark:bg-gray-800">
                    <td class="px-6 py-4">
                        <img class="rounded-lg" :src="deal.image" :alt="'صورة ' + deal.heading" />
                    </td>
                    <td class="py-4 pe-6 ps-3 text-gray-900 dark:text-white">{{ deal.heading }}</td>
                    <td class="px-6 py-4">{{ deal.description }}</td>
                    <td dir="ltr" class="px-6 py-4">
                        <time :datetime="deal.datetime">
                            {{
                                new Date(deal.datetime).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })
                            }}
                            {{ new Date(deal.datetime).toLocaleDateString() }}
                        </time>
                    </td>
                    <td class="px-6 py-4"><IconTick v-if="deal.is_annual" /></td>
                    <td class="px-6 py-4">
                        <span
                            v-for="tagId in deal.tag_ids"
                            :key="tagId"
                            class="mb-1 me-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                            {{ getTagNameFromId(tagId) }}
                        </span>
                    </td>
                    <td class="px-6 py-4">
                        <span
                            v-for="interestId in deal.interest_ids"
                            :key="interestId"
                            class="mb-1 me-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                            {{ getInterestNameFromId(interestId) }}
                        </span>
                    </td>
                    <td class="px-6 py-4">
                        <div class="inline-flex rounded-md shadow-sm" role="group">
                            <button
                                type="button"
                                class="inline-flex items-center rounded-s-lg border border-gray-200 px-4 py-2 text-sm font-medium text-primary-500 hover:bg-primary-100 focus:z-10 focus:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:hover:bg-primary-950 dark:focus:ring-primary-500">
                                <IconPenEdit class="me-2 h-5 w-5 text-primary-500" />
                                تعديل
                            </button>
                            <button
                                @click="deleteDeal(deal.id)"
                                type="button"
                                class="inline-flex items-center rounded-e-lg border border-s-0 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:text-red-500 dark:hover:bg-red-950 dark:hover:text-red-500 dark:focus:text-red-500">
                                <IconDeleteTrash class="me-2 h-5 w-5 text-red-500" />
                                حذف
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- "!isResultFound" would accept null as true -->
        <span v-else-if="isResultFound === false" class="grid place-items-center p-5 text-gray-500">
            عذراً، لم يتم العثور على نتائج
        </span>
        <span v-else class="grid animate-pulse place-items-center p-5 text-gray-500">
            جاري التحميل...
        </span>
    </div>
    <ModalComponent
        :dealId="dealToDeleteId"
        :show="showModal"
        @hide-modal="showModal = false"
        @hide-from-list="(c) => (hiddenDealId = c)" />
</template>

<script setup>
import ModalComponent from '@/components/ModalComponent.vue';

// Icons
import IconDeleteTrash from '@/components/icons/IconDeleteTrash.vue';
import IconPenEdit from '@/components/icons/IconPenEdit.vue';
import IconTick from '@/components/icons/IconTick.vue';

// Stores
import { useData } from '@/stores/useData';
const request = useData();

// Vue's
import { onMounted, ref, computed, watch } from 'vue';

// Data
const deals = ref(null);
const isResultFound = ref(null);

let showModal = ref(false);
let hiddenDealId = ref();
let dealToDeleteId = ref(null);

function deleteDeal(dealId) {
    showModal.value = true;
    dealToDeleteId.value = dealId;
}

const props = defineProps({
    searchValue: String,
});

const searchResult = computed(() => {
    if (!deals.value) return []; // Guard against null value
    return deals.value.filter(
        (d) =>
            (d.heading && d.heading.includes(props.searchValue)) ||
            (d.description && d.description.includes(props.searchValue)) ||
            (d.datetime && d.datetime.includes(props.searchValue)) ||
            (d.is_annual && 'سنوي'.includes(props.searchValue))
        // todo: make search by tags and interests possible
        // (d.interestsNames && d.interestsNames.join('، ').includes(props.searchValue)) ||
        // (d.tagsNames && d.tagsNames.join('، ').includes(props.searchValue))
    );
});

function getInterestNameFromId(interestId) {
    if (!interests.value || !interestId) return '';
    const interest = interests.value.find((obj) => obj.id === interestId);
    return interest.name;
}

function getTagNameFromId(tagId) {
    if (!tags.value || !tagId) return '';
    const tag = tags.value.find((obj) => obj.id === tagId);
    return tag.name;
}

let dealsDataSource = computed(() => {
    if (isResultFound.value) {
        return searchResult.value;
    } else if (searchResult.value.length === 0 && props.searchValue !== null) {
        return;
    } else {
        return deals.value;
    }
});

watch(searchResult, () => {
    if (searchResult.value.length > 0) {
        isResultFound.value = true;
    } else if (searchResult.value.length === 0 && props.searchValue !== null) {
        isResultFound.value = false;
    }
});

const interests = ref([]);
const tags = ref([]);

// Lifecycle Hooks
onMounted(async () => {
    deals.value = await request.get('/deals');
    interests.value = await request.get('/interests');
    tags.value = await request.get('/tags');
});
</script>
