<script setup lang="ts">
import { ref } from 'vue';

const forgotLink = ref("/forget-password");
const email = ref("");
const password = ref("");

const emailError = ref("");
const passwordError = ref("");

function onButtonClick (){
    validation(email.value,password.value);
}

function validation(email: string, password: string){
    emailError.value = "";
    passwordError.value = "";

    if(email.length === 0 && password.length === 0){
        emailError.value = "Input your email.";
        passwordError.value = "Input password";
        return;
    }

    if(email.length === 0){
        emailError.value = "Input your email.";
        return;
    }

    if(password.length === 0){
        passwordError.value = "Input password";
        return;
    }
}
</script>

<template>
    <section class="vh-100">
        <div class="h-100 container py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <h3 class="mb-5">Sign in</h3>

                            <div class="form-outline mb-4">
                                <input v-model="email" type="email" id="typeEmailX-2" class="form-control form-control-lg"
                                    placeholder="Email" />
                                <p class="text-danger">{{ emailError }}</p>
                            </div>

                            <div class="form-outline mb-4">
                                <input v-model="password" type="password" id="typePasswordX-2" class="form-control form-control-lg"
                                    placeholder="password" />
                                    <p class="text-danger">{{ passwordError }}</p>
                            </div>

                            <!-- Checkbox -->
                            <div class="form-check d-flex justify-content-between mb-4">
                                <div>
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                                </div>
                                <div>
                                    <a v-bind:href="forgotLink">Forgot password?</a>
                                </div>
                            </div>

                            <button v-on:click="onButtonClick" class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>