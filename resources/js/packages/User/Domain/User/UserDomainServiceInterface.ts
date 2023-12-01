import { UserId } from "./UserId";

export interface UserDomainServiceInterface
{
    existById(id:UserId):boolean;
}