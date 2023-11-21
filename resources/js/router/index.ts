import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AuthComponent from '../components/AuthComponent/AuthComponent.vue';
import PasswordResetRequestComponent from './../components/AuthComponent/PasswordResetRequestComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: AuthComponent
        },
        {
            path: '/password-reset-request',
            name: 'password reset request',
            component: PasswordResetRequestComponent
        }
    ]
});

export default router;