<script setup lang="ts">
import {
    useRoute
} from 'vue-router';
const route = useRoute();
const isDashboard = route.path === '/dashboard';
const isAccount = route.path === '/accounts';
const isUser = route.path === '/users';
const isLoan = route.path === '/loans';
</script>
<template>
    <ul class="sidebar d-flex justify-content-center sticky-top">
        <li>
            <router-link
                :class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isDashboard }"
                to="/dashboard">Dashboard</router-link>
        </li>
        <li>
            <router-link
                :class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isAccount }"
                to="/accounts">Account</router-link>
        </li>
        <li>
            <router-link
                :class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isUser }"
                to="/users">User</router-link>
        </li>
        <li>
            <router-link
                :class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isLoan }"
                to="/loans">Loan</router-link>
        </li>
    </ul>
</template>

<style>
.btn-check:checked+.btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check)+.btn:active {
    color: #fff;
    background-color: #0F8390;
    border-color: #0F8390;
}</style>