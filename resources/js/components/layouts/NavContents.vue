<script setup lang="ts">
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid padding-30">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button type="button"
                        class="btn btn-outline-primary ml-2 d-flex justify-content-center align-items-center icon-btn">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style>
.padding-30 {
    padding: 0 30px;
}
</style>