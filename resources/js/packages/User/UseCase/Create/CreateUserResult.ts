export class CreateUserResult
{
    public readonly status:boolean;
    public readonly password:string|null

    constructor(
        status:boolean,
        password:string|null,
    ){
        this.status = status;
        this.password = password;
    }
}