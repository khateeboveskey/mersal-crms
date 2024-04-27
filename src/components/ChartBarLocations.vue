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
        <div class="h-fit py-6">
            <div id="pie-chart"></div>
            <div id="loader" class="flex w-full justify-center" role="status">
                <svg
                    aria-hidden="true"
                    class="inline h-8 w-8 animate-spin fill-primary-500 text-gray-200 dark:fill-gray-300 dark:text-gray-900"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
            </div>
        </div>
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
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
        chart.render();
    }
});
</script>
