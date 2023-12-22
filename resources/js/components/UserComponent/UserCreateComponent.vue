<script setup lang="ts">
import { pushScopeId, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedRole = ref('admin'); // Default role

const user_name = ref("");
const nick_name = ref("");
const email = ref("");
const accounts = ref([]);

const user_name_error = ref("");
const nick_name_error = ref("");
const email_error = ref("");

const is_valid_user_name = ref(false);
const is_valid_nick_name = ref(false);
const is_valid_email = ref(false);

const number_of_accounts = ref(0);
const account_links = ref([]);

const onButtonClick = () => {
    validation(user_name.value, nick_name.value, email.value);
    createRequest(user_name.value, nick_name.value, email.value, accounts.value);
}

const validation = (user_name: string, nick_name: string, email: string) => {
    user_name_error.value = "";
    nick_name_error.value = "";
    email_error.value = "";

    if (user_name.length === 0) {
        user_name_error.value = "Enter new user name.";
    } else if (user_name.length > 256) {
        user_name_error.value = "User name must be less than 256 characters long.";
    }

    if (nick_name.length > 256 && nick_name.length !== 0) {
        nick_name_error.value = "Nick name must be less than 256 characters long."
    }

    if (email.length === 0) {
        email_error.value = "Enter email.";
    } else if (email.length > 256) {
        email_error.value = "Email must be between 1 and 256 characters long.";
    }

    is_valid_user_name.value = user_name_error.value === '';
    is_valid_nick_name.value = nick_name_error.value === '';
    is_valid_email.value = email_error.value === '';
}

const createRequest = (user_name: string, nick_name: string | null, email: string, accounts: string[]) => {
    axios.post(
        '/api/user/create',
        {
            user_name: user_name,
            nick_name: nick_name,
            email: email,
            accounts: accounts
        })
        .then((respone) => {
            const user_data = {
                user_name: user_name,
                nick_name: nick_name,
                email: email,
                accounts: accounts
            };

            router.push(
                {
                    name: 'create-complete',
                    query: user_data
                }
            );
        }).catch((error) => {
            console.log(error.response.data.errors.user_name);
        });
}


const handleRoleChange = (role) => {
    selectedRole.value = role;
};

const addAccountLink = () => {
    number_of_accounts.value++;
    account_links.value.push({
        id: number_of_accounts.value,
        selectedAccount: null
    });
};

const removeAccountLink = (id) => {
    number_of_accounts.value--;
    account_links.value = account_links.value.filter(link => link.id !== id);
};
</script>

<template>
    <div class="border-bottom pb-2">
        <h1 class="fs-3">Create a new user</h1>
    </div>
    <form form @submit.prevent="onButtonClick">
        <div class="border-bottom py-3">
            <p class="mb-3">Required fields are marked with an asterisk (*).</p>
            <label for="user_name" role="button">User name *</label>
            <input v-model="user_name"
                v-bind:class="{ 'form-control': true, 'mr-2': true, 'is-invalid': user_name_error, 'is-valid': is_valid_user_name }"
                type="text" name="user_name" id="user_name">
            <p class="text-danger">{{ user_name_error }}</p>
            <label for="nick_name" role="button" class="mt-3">Nick name</label>
            <input v-model="nick_name"
                v-bind:class="{ 'form-control': true, 'mr-2': true, 'is-invalid': nick_name_error, 'is-valid': is_valid_nick_name }"
                type="text" name="nick_name" id="nick_name">
            <p class="text-danger">{{ nick_name_error }}</p>
            <label for="email" role="button" class="mt-3">Email *</label>
            <input v-model="email"
                v-bind:class="{ 'form-control': true, 'mr-2': true, 'is-invalid': email_error, 'is-valid': is_valid_email }"
                type="text" name="user_email" id="email">
            <p class="text-danger">{{ email_error }}</p>
        </div>
        <div class="border-bottom py-3">
            <div class="d-flex align-items-center">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked
                        v-on:change="handleRoleChange('admin')">
                </div>
                <div class="mx-1">
                    <span class="material-symbols-outlined icon">person</span>
                </div>
                <div class="mx-1">
                    <label class="form-check-label fw-bold" for="flexRadioDefault1" role="button">Admin</label>
                    <p>Admin user can see all accounts and create user and account.</p>
                </div>
            </div>
            <div class="d-flex align-items-center mt-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        v-on:change="handleRoleChange('personal')">
                </div>
                <div class="mx-1">
                    <span class="material-symbols-outlined icon">supervisor_account</span>
                </div>
                <div class="mx-1">
                    <label class="form-check-label fw-bold" for="flexRadioDefault2" role="button">Personal</label>
                    <p>Personal users can only see accounts to which they have access privileges.</p>
                </div>
            </div>
        </div>
        <div class="border-bottom py-3" v-show="selectedRole === 'admin'">
            <p>Admin user can access all accounts.</p>
        </div>
        <div class="border-bottom py-3" v-show="selectedRole === 'personal'">
            <div>
                <p>Personal user can access specific accounts.</p>
            </div>

            <div v-for="link in account_links" :key="link.id">
                <div class="mt-3">
                    <label for="link_account">Account</label>
                </div>
                <div class="mb-3 d-flex align-items-center justify-content-between">
                    <select v-model="link.selectedAccount" class="form-select mr-4" id="link_account">
                        <option value="account1">Account1</option>
                        <option value="account2">Account2</option>
                        <option value="account3">Account3</option>
                    </select>
                    <span class="material-symbols-outlined remove-icon"
                        @click="removeAccountLink(link.id)">remove_circle</span>
                </div>
            </div>

            <div @click="addAccountLink" class="btn btn-primary btn-lg btn-block btn-sm mt-2">Link account</div>

        </div>
        <div class="py-3 float-end">
            <button class="btn btn-primary btn-lg btn-block btn-sm" type="submit">Create</button>
        </div>
    </form>
</template>

<style scoped>
.remove-icon {
    font-size: 24px;
    cursor: pointer;
    color: red;
}

.form-select {
    width: 95%;
}
</style>