import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export interface UserDomainServiceInterface
{
    existById(id:UserId):boolean;

    existByEmail(email:UserEmail):boolean;
}