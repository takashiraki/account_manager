import { User } from "./User";

export interface UserFactoryInterface
{
    create(
        user_name:string,
        nick_name:string|null,
        role:string,
        link_account:string|null
    ):User
}