import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AuthComponent from '../components/AuthComponent/AuthComponent.vue';
import PasswordResetRequestComponent from './../components/AuthComponent/PasswordResetRequestComponent.vue';
import DashBoardComponent from './../components/layouts/DashboardComponent.vue';

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
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoardComponent
        }
    ]
});

export default router;