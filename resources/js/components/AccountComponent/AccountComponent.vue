<script setup lang="ts">
import {
    useRouter
} from 'vue-router';
const route = useRouter();
const isDashboard = route.path === '/dashboard';
const isAccount = route.path === '/accounts';
const isUser = route.path === '/users';
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
<div class="row mt-5">
    <div class="col-2">
        <ul class="sidebar">
            <li>
                <!-- <a class="btn btn btn-outline-primary btn-lg sidebar-btn" role="button" aria-disabled="true" href="">Dashboard</a> -->
                <router-link 
                v-bind:class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isDashboard }" role="button" aria-disabled="true" to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <!-- <a class="btn btn btn-outline-primary btn-lg sidebar-btn" role="button" aria-disabled="true" href="">Account</a> -->
                <router-link 
                v-bind:class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isAccount }" role="button" aria-disabled="true" to="/accounts">Account</router-link>
            </li>
            <li>
                <!-- <a class="btn btn btn-outline-primary btn-lg sidebar-btn" role="button" aria-disabled="true" href="">User</a> -->
                <router-link 
                v-bind:class="{ 'btn': true, 'btn-outline-primary': true, 'btn-lg': true, 'sidebar-btn': true, 'active': isUser }" role="button" aria-disabled="true" to="/users">User</router-link>
            </li>
            <li><a class="btn btn btn-outline-primary btn-lg sidebar-btn" role="button" aria-disabled="true" href="">Loan</a></li>
        </ul>
    </div>
    <div class="col-7">
        
    </div>
    <div class="col-3">
        
    </div>
</div>
</template>

<style>
.card {
    width: auto;
}

.row {
    padding: 0 25px;
}
</style>
