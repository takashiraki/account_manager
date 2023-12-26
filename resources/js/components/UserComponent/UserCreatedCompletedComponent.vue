<script setup lang="ts">
import defineProps from 'vue'
const props = defineProps(['temp']);
console.log(props.temp);
</script>

<template>
    <div class="border-bottom pb-2">
        <h1 class="fs-3">Create complete</h1>
    </div>
    <div class="pt-3">
        <table class="table mb-0">

            <tbody>
                <tr>
                    <th scope="row">User name</th>
                    <td>Mark</td>
                </tr>
                <tr>
                    <th scope="row">Nick name</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td colspan="2">Larry the Bird</td>
                </tr>
                <tr>
                    <th scope="row">Password</th>
                    <td colspan="2">Larry the Bird</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="py-3 float-end">
        <router-link v-bind:class="{
            'btn': true,
            'btn-primary': true,
            'btn-lg': true,
            'btn-block': true,
            'btn-sm': true
        }" to="/user/create" role="button">
            Create another user
        </router-link>
    </div>
</template>