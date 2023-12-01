import { CreateUserRequest } from "./CreateUserRequest";
import { CreateUserResult } from "./CreateUserResult";

export interface CreateUserUseCaseInterface
{
    create(request:CreateUserRequest):CreateUserResult;
}