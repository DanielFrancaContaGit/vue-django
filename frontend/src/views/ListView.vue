<script setup lang='ts'>
import { useFetch } from '../functions/fetch';
import { ref, type Ref } from "vue";
import { useAuthenticationStore } from '../stores/authentication.ts';

interface User {
    id: number;
    username: string;
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    id: number;
}

const url: URL = new URL('http://localhost:8000/auth/users/me')

const userList: Ref = useFetch(url)

const res: Ref<Array<User>> = ref(userList)

const auth = useAuthenticationStore()

</script>

<template>
    <section class="flex flex-col justify-center items-center my-20">
        
        <h1 class="text-3xl font-bold underline">Seja bem vindo {{ res.username }}</h1>
        {{ auth.isAuthenticated }}

        <ul v-if="res.username" class="my-10">
          <p class="text-2xl">Detalhes do usuario</p>
          <p>nome: {{ res.username }}</p>
          <p>email: {{ res.email }}</p>
          <p>id: {{ res.id }}</p>
        </ul>

        <nav class="flex justify-between w-60 mt-4">
            <RouterLink class="btn btn-outline" to="/">Home</RouterLink>
            <RouterLink class="btn btn-outline" to="/signup">Signup</RouterLink>
            <RouterLink class="btn btn-outline" to="/list">List</RouterLink>
        </nav>
    </section>
</template>
