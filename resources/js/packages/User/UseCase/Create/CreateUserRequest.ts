export class CreateUserRequest {
    public readonly user_name: string;
    public readonly nick_name: string | null;
    public readonly role:string;
    public readonly link_accounts:string|null;

    constructor(user_name: string, nick_name: string | null) {
        this.user_name = user_name;
        this.nick_name = nick_name;
    }
}
