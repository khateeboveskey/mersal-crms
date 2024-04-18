<template>
    <div class="w-full max-w-sm rounded-lg bg-white p-4 shadow md:p-6 dark:bg-gray-800">
        <div class="flex w-full items-start justify-between">
            <div class="flex-col items-center">
                <div class="mb-1 flex items-center">
                    <h5 class="me-1 text-xl font-bold leading-none text-gray-900 dark:text-white">
                        مديريات العملاء
                    </h5>
                    <svg
                        data-popover-target="chart-info"
                        data-popover-placement="bottom"
                        class="ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                    </svg>
                    <div
                        data-popover
                        id="chart-info"
                        role="tooltip"
                        class="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        <div class="space-y-2 p-3">
                            <p>كم نسبة العملاء المنتسبين لكل مديرية</p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <button
                    id="widgetDropdownButton"
                    data-dropdown-toggle="widgetDropdown"
                    data-dropdown-placement="bottom"
                    type="button"
                    class="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    <svg
                        class="h-3.5 w-3.5 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3">
                        <path
                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span class="sr-only">افتح القائمة المنسدلة</span>
                </button>
                <div
                    id="widgetDropdown"
                    class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                    <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="widgetDropdownButton">
                        <li>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg
                                    class="me-2 h-3 w-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 21 21">
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                                </svg>
                                تعديل المخطط
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg
                                    class="me-2 h-3 w-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                    <path
                                        d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                </svg>
                                تحميل البيانات
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg
                                    class="me-2 h-3 w-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20">
                                    <path
                                        d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                </svg>
                                حذف المخطط
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Line Chart -->
        <div v-show="contacts" class="h-fit py-6" id="pie-chart"></div>
        <div v-show="!contacts">جاري تحميل البيانات...</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts';
import { initFlowbite } from 'flowbite';
import { useData } from '@/stores/useData';

const request = useData();

const locations = ref([]);
const contacts = ref([]);

const getChartOptions = () => {
    return {
        series: precentages,
        chart: {
            height: 420,
            width: '100%',
            type: 'pie',
        },
        stroke: {
            colors: [''],
            width: -1,
        },
        plotOptions: {
            pie: {
                labels: {
                    show: true,
                },
                size: '100%',
                dataLabels: {
                    offset: -25,
                },
            },
        },
        labels: names,
        dataLabels: {
            enabled: true,
        },
        legend: {
            position: 'bottom',
            offsetY: 10,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + '%';
                },
            },
        },
        xaxis: {
            labels: {
                formatter: function (value) {
                    return value + '%';
                },
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
    };
};

function locationPrecentages(locations) {
    // Create an empty object to store the precentages
    let precentages = {};
    let names = [];

    // Loop through the locations array
    for (let location of locations) {
        // If the location id is not in the precentages object, add it with a precentage of 0
        if (!precentages[location.location_id]) {
            precentages[location.location_id] = {
                id: location.location_id,
                name: location.location,
                precentage: 0,
            };
            names.push(location.location);
        }

        // Increment the precentage for this location id
        precentages[location.location_id].precentage += 100 / locations.length;
    }

    // Convert the precentages object to an array and return it
    return {
        precentages: Object.values(precentages).map((location) => location.precentage),
        names: names,
    };
}

let { precentages, names } = locationPrecentages(contacts.value);
onMounted(async () => {
    locations.value = await request.get('/locations');
    contacts.value = await request.get('/contacts');
    ({ precentages, names } = locationPrecentages(contacts.value));
    initFlowbite();
    if (
        document.getElementById('pie-chart') &&
        typeof ApexCharts !== 'undefined' &&
        locations.value
    ) {
        const chart = new ApexCharts(document.getElementById('pie-chart'), getChartOptions());
        chart.render();
    }
});
</script>
