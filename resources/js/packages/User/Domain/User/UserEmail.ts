export class UserEmail
{
    private static MIN_LENGTH:number = 1;
    private static MAX_LENGTH:number = 256;
    private user_email:string

    constructor(email:string){
        if(!email || email.trim() === ''){
            throw new Error("User email needs any value");
        }
        
        if(UserEmail.MIN_LENGTH > email.length || email.length > UserEmail.MAX_LENGTH){
            throw new Error("User email must be between 1 and 256 characters long.");
        }
        this.user_email = email;
    }

    get userEmail():string
    {
        return this.user_email;
    }
}