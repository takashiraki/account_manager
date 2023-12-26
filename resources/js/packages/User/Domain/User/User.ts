import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export class User
{
    private readonly user_id:UserId;
    private readonly user_name:UserName;
    private readonly user_email:UserEmail;
    
    constructor(
        id:UserId,
        name:UserName,
        email:UserEmail
    ){
        this.user_id = id;
        this.user_name = name;
        this.user_email = email;
    }

    get userId():UserId
    {
        return this.user_id;
    }

    get userName():UserName
    {
        return this.user_name;
    }

    get userEmail():UserEmail
    {
        return this.user_email;
    }
}