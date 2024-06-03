<template>
  <section class="grid place-items-center bg-gray-50 p-0 dark:bg-gray-950">
    <div class="flex w-screen flex-col items-center justify-center p-4 sm:w-96">
      <div
        class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
          <form
            class="space-y-4 md:space-y-6"
            @submit.prevent="login">
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
                  <label
                    for="remember"
                    class="text-gray-500 dark:text-gray-300">
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
              class="group w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 disabled:cursor-wait dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <span class="group group-disabled:hidden">تسجيل الدخول</span>
              <div
                class="hidden group-disabled:block"
                role="status">
                <svg
                  aria-hidden="true"
                  class="inline h-5 w-5 animate-spin fill-primary-500 text-gray-200 dark:fill-gray-300 dark:text-primary-500"
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
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import auth from '@/services/authService';
import { reactive, ref } from 'vue';

const credentials = reactive({
  username: '',
  password: '',
});

const rememberMe = ref(false);

async function login() {
  const submitBtn = document.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  const res = await auth.login(credentials);
  if (res.error) {
    submitBtn.disabled = false;
  }
}
</script>
