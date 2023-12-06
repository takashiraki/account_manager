<script setup lang="ts">
</script>
<template>
    <div class="border-bottom">
        <div class="d-flex justify-content-between mb-3">
            <form>
                <div class="d-flex">
                    <input type="email" class="form-control width-25 mr-2" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter name">
                    <select class="form-select w-auto mx-2" aria-label="Default select example">
                        <option selected>type</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </select>
                    <button type="button"
                        class="btn btn-outline-primary mx-2 d-flex justify-content-center align-items-center icon-btn">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>
            </form>
            <router-link to="/user/create"
                v-bind:class="{ 'btn': true, 'btn-primary': true, 'd-flex': true, 'justify-content-center': true, 'align-items-center': true, 'icon-btn': true }">
                <span class="material-symbols-outlined">
                    person_add
                </span>
            </router-link>
        </div>
    </div>
    <div>
        <ul class="list-group">
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <router-link
                            v-bind:class="{ 'link-offset-2': true, 'link-offset-3-hover': true, 'link-underline': true, 'link-underline-opacity-0': true, 'link-underline-opacity-75-hover': true }"
                            to="/user/hogehoge/edit">hogehoge</router-link>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-outline-primary dropdown-toggle icon-btn" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-symbols-outlined d-flex justify-content-center align-items-center">
                                settings
                            </span>
                        </button>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="#">Edit</a></li>
                            <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
.dropstart .dropdown-toggle::before {
    content: none;
}
</style>