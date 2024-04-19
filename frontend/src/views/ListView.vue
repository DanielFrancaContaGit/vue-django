<script setup lang='ts'>
import { useFetch } from '../functions/fetch'
import { ref, type Ref } from "vue";

interface User {
    username: string;
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    id: number;
}

const url: URL = new URL('http://localhost:8000/api/users/')

const userList: Ref = useFetch(url)

const res: Ref<Array<User>> = ref(userList)

</script>

<template>
    <sectin>
        <h1 class="text-3xl font-bold underline">Linsta de usuarios</h1>
        
        <li class="my-8" v-for="user in res">
            <ul>Username: {{ user.username }}</ul>
            <ul>is_staff: {{ user.is_staff }}</ul>
            <ul>Active: {{ user.is_active }}</ul>
            <ul>Superuser: {{ user.is_superuser }}</ul>
        </li>

        <nav class="flex justify-between w-60 mt-4">
            <RouterLink class="btn btn-outline" to="/">Home</RouterLink>
            <RouterLink class="btn btn-outline" to="/signup">Signup</RouterLink>
            <RouterLink class="btn btn-outline" to="/list">List</RouterLink>
        </nav>
    </sectin>
</template>