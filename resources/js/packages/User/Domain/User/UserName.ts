export class UserName
{
    private static readonly MIN_LENGTH:number = 1;
    private static readonly MAX_LENGTH:number = 256;

    private readonly user_name:string;
    
    constructor(name:string){
        if(!name || name.trim() === ''){
            throw new Error("User name needs any value.");
        }

        if(UserName.MIN_LENGTH > name.length || name.length > UserName.MAX_LENGTH){
            throw new Error("User name must be betweeen 1 and 256 characters long.");
        }
    }

    get userName():string
    {
        return this.user_name;
    }
}