import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepositoryInterface
{
    save(user:User):boolean;
    
    findById(id:UserId):User|null;
}