<script setup lang="ts">
import SideBarComponent from './SidebarComponent.vue';
import NavComponent from './../layouts/NavContents.vue';
</script>

<template>
    <NavComponent />
    <div class="row mt-5">
        <div class="col-2 px-2">
            <SideBarComponent />
        </div>
        <div class="col-7 px-2">
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Welcome back!</h4>
                <p>
                    The grid supports six responsive breakpoints. Breakpoints are based on a min-width media query, which
                    affects that breakpoint and all breakpoints above it (e.g., .col-sm-4 applies to sm, md, lg, xl, xxl).
                </p>
                <p>
                    This means that you can control the size and behavior of containers and columns for each breakpoint.
                </p>
                <hr>
                <p class="mb-0">Use the margin utilities whenever you need them and keep them nice and neat.</p>
            </div>
        </div>
        <div class="col-3 px-2">
            <div class="card sticky-top">
                <div class="card-body">
                    <h5 class="card-title">Title</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Sub title</h6>
                    <p class="card-text">A brief sample text based on the card's title that makes up the bulk of the card's
                        content.</p>
                    <a href="#" class="card-link">Link1</a>
                    <a href="#" class="card-link">Link2</a>
                </div>
            </div>
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
