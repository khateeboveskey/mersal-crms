<template>
    <section class="grid place-items-center bg-gray-50 p-0 dark:bg-gray-950">
        <div class="flex w-screen flex-col items-center justify-center p-4 sm:w-96">
            <BrandIdentity class="!flex text-4xl">
                <template #logo>
                    <MersalLogo class="me-2 w-12" />
                </template>
                <template #name>مِرسال</template>
            </BrandIdentity>
            <div
                class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
                    <form class="space-y-4 md:space-y-6" @submit.prevent="login">
                        <div>
                            <label
                                for="username"
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                اسم المستخدم
                            </label>
                            <input
                                v-model="credentials.username"
                                type="username"
                                name="username"
                                id="username"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                required />
                        </div>
                        <div>
                            <label
                                for="password"
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                كلمة المرور
                            </label>
                            <input
                                v-model="credentials.password"
                                type="password"
                                name="password"
                                id="password"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                required />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex h-5 items-center">
                                    <input
                                        v-model="rememberMe"
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 checked:text-primary-700 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                </div>
                                <div class="ms-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">
                                        تذكرني
                                    </label>
                                </div>
                            </div>
                            <a
                                href="#"
                                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                هل نسيت كلمة المرور؟
                            </a>
                        </div>
                        <button
                            type="submit"
                            class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            تسجيل الدخول
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BrandIdentity from '@/components/BrandIdentity.vue';
import MersalLogo from '@/assets/imgs/MersalLogo.vue';

import { useData } from '@/stores/useData';
import { reactive, ref } from 'vue';
const request = useData();

const credentials = reactive({
    username: '',
    password: '',
});

const rememberMe = ref(false);

async function login() {
    const resData = await request.post('/login', credentials);
    const AUTH_TOKEN = resData.token;
    localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
    location.reload();
}
</script>
