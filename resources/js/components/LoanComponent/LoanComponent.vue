<script setup lang="ts">
import SideBarComponent from './../layouts/SidebarComponent.vue';
import NavComponent from './../layouts/NavContents.vue';
</script>

<template>
<NavComponent />
<div class="row mt-5">
    <div class="col-2">
        <SideBarComponent />
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
