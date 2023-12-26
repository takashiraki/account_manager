import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AuthComponent from '../components/AuthComponent/AuthComponent.vue';
import PasswordResetRequestComponent from './../components/AuthComponent/PasswordResetRequestComponent.vue';
import DashBoardComponent from './../components/layouts/DashboardComponent.vue';
import AccountComponent from './../components/AccountComponent/AccountComponent.vue';
import UserComponent from './../components/UserComponent/UserComponent.vue';
import UserListComponent from './../components/UserComponent/UserListComponent.vue';
import UserCreateComponent from './../components/UserComponent/UserCreateComponent.vue';
import UseraCreatedCompoleteComponent from './../components/UserComponent/UserCreatedCompletedComponent.vue';
import UserEditComponent from './../components/UserComponent/UserEditComponent.vue';
import UserOldInfoComponent from './../components/UserComponent/UserOldInfoComponent.vue';
import UserDetailComponent from './../components/UserComponent/UserDetailComponent.vue';
import LoanComponent from './../components/LoanComponent/LoanComponent.vue';

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
        },
        {
            path: '/accounts',
            name: 'Accounts',
            component: AccountComponent
        },
        {
            path: '/users',
            name: 'Users',
            component: UserComponent,
            children: [
                {
                    path: '',
                    name: 'UserList',
                    components: {
                        default: UserListComponent,
                        sub_component: UserDetailComponent
                    },
                },
                {
                    path: '/user/create',
                    name: 'Create new user',
                    component: UserCreateComponent,
                },
                {
                    path: '/user/create-complete',
                    name: 'create-complete',
                    component: UseraCreatedCompoleteComponent,
                    props: route => ({temp:route.params.user_data}),
                },
                {
                    path: '/user/:id/edit',
                    name: 'Edit user',
                    components: {
                        default: UserEditComponent,
                        sub_component: UserOldInfoComponent
                    }
                }
            ],
        },
        {
            path: '/loans',
            name: 'Loans',
            component: LoanComponent
        }
    ]
});

export default router;