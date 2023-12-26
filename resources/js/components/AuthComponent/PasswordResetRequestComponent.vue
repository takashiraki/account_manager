<script setup lang="ts">
import { ref } from 'vue';

const email = ref("");

const emailError = ref("");

const isValidEmail = ref(false);

function onButtonClick() {
    try {
        validation(email.value)
    } catch (error) {
        throw error;
    }
}

function validation(email: string) {
    emailError.value = "";

    if (email.length === 0) {
        emailError.value = "Input your email.";
    }

    isValidEmail.value = emailError.value === '';

    return isValidEmail.value;
}
</script>

<template>
    <section class="vh-100">
        <div class="h-100 container py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="d-flex align-items-center justify-content-center shadow-2-strong border"
                        style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <form @submit.prevent="onButtonClick" class="needs-validation">
                                <h3 class="mb-5">Reset your password</h3>

                                <p>Enter your user account's verified email address and we will send you a password reset
                                    link..</p>

                                <div class="form-outline mb-4">
                                    <input v-model="email"
                                        v-bind:class="{ 'form-control': true, 'form-control-lg': true, 'is-invalid': emailError, 'is-valid': isValidEmail }"
                                        type="email" id="typeEmailX-2" placeholder="Email" />
                                    <p class="text-danger">{{ emailError }}</p>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block login">Request password
                                    reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>