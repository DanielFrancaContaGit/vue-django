<script setup lang="ts">
import { ref, type  Ref } from 'vue';
import router from '@/router';
import { useAuthenticationStore } from '../stores/authentication.ts';

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')

const auth = useAuthenticationStore()

const url: URL = new URL('http://127.0.0.1:8000/auth/token/login/')

function submitForm() {
    const body = new FormData()
    const userAuth = useAuthenticationStore()

    body.set('username', username.value) 
    body.set('password', password.value)

   fetch(url, {
        method: 'POST',
        body,
    })
    .then((request) => request.json())
    .then((json) => {
      console.log(json)
      userAuth.setToken(json.auth_token)
      router.push({ name: 'list' })
    })

}

</script>
<template>
    <section class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold underline">Login View </h1>

        <form v-on:submit.prevent="submitForm" class="flex flex-col justify-center items-center my-5">
            <input type="text" v-model="username" placeholder="Username" class="input input-bordered w-full max-w-xs">
            <input type="password" v-model="password" placeholder="Password" class="input input-bordered w-full max-w-xs">
            <button type="submit" class="btn btn-wide mt-3 bg-blue-500">Login</button>
        </form>


        <nav class="flex justify-between w-60 mt-4">
            <RouterLink class="btn btn-outline" to="/">Home</RouterLink>
            <RouterLink class="btn btn-outline" to="/signup">Signup</RouterLink>
            <RouterLink class="btn btn-outline" to="/list">List</RouterLink>
        </nav>

    </section>

</template>
