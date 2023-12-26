export class UserId
{
    private static readonly LENGTH:number = 36;
    private readonly user_id:string

    constructor(id:string){
        if(!id || id.trim() === ''){
            throw new Error("User id needs any value.");
        }

        if(id.length !== UserId.LENGTH){
            throw new Error("User id must be 36 characters long");
        }
        
        this.user_id = id;
    }

    get userId():string
    {
        return this.user_id;
    }
}