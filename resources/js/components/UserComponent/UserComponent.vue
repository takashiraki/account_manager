<script setup lang="ts">
import SideBarComponent from './../layouts/SidebarComponent.vue';
import NavComponent from './../layouts/NavContents.vue';
</script>

<template>
    <NavComponent />
    <div class="row mt-5">
        <div class="col-2 px-4">
            <SideBarComponent />
        </div>
        <div class="col-7 px-4">
            <router-view />
        </div>
        <div class="col-3 px-4">
            <router-view name="sub_component" />
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

.width-25 {
    width: 25em;
}
</style>
