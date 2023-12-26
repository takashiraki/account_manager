<script setup lang="ts">
</script>

<template>
    <div class="card sticky-top">
        <div class="card-body">
            <div class="border-bottom pb-3">
                <h4 class="fs-4 d-flex justify-content-start align-items-center card-title">
                    <p class="mb-0 me-3 link-offset-2 link-underline link-underline-opacity2">hogehoge </p>
                    <span class="fs-6 card-subtitle text-body-secondary">admin</span>
                </h4>
                <p>Last login : yyyy/mm/dd</p>
            </div>
            <div class="py-3">
                <h5 class="fs-5">Link accounts</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="">Account</a>
                            </td>
                            <td>Link</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="">Account</a>
                            </td>
                            <td>Link</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="">Account</a>
                            </td>
                            <td>Link</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="">Account</a>
                            </td>
                            <td>Link</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
.card {
    height: 80vh;
    top: 20px;
}
</style>