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
                    <button type="button" class="btn btn-primary mx-2 search-button">
                        <!-- <img src="./../../../images/search.png" alt="" srcset=""> -->
                    </button>
                </div>
            </form>
            <!-- <a class="btn btn-primary strong-button create-btn" href="#" role="button"></a> -->
            <router-link to="/user/create"
                v-bind:class="{ 'btn': true, 'btn-primary': true, 'strong-button': true, 'create-btn': true }">
            </router-link>
        </div>
    </div>
    <div>
        <ul class="list-group">
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
            <li class="list-group-flush list-unstyled d-flex justify-content-between border-bottom py-4">
                <div>
                    <h3 class="fs-4 d-flex justify-content-between align-items-center">
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">hogehoge
                        </a>
                        <span class="fs-6">admin</span>
                    </h3>
                    <p>Last login : yyyy/mm/dd</p>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>