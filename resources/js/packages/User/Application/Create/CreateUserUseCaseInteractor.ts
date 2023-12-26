import { UserDomainServiceInterface } from "../../Domain/User/UserDomainServiceInterface";
import { UserEmail } from "../../Domain/User/UserEmail";
import { UserFactoryInterface } from "../../Domain/User/UserFactoryInterface";
import { UserRepositoryInterface } from "../../Domain/User/UserRepositoryInterface";
import { CreateUserRequest } from "../../UseCase/Create/CreateUserRequest";
import { CreateUserResult } from "../../UseCase/Create/CreateUserResult";
import { CreateUserUseCaseInterface } from "../../UseCase/Create/CreateUserUseCaseInterface";

class CreateUserUseCaseInteractor implements CreateUserUseCaseInterface
{
    private readonly user_domain_service:UserDomainServiceInterface;

    private readonly user_repository:UserRepositoryInterface;

    private readonly user_factory:UserFactoryInterface;

    constructor(
        user_domain_service:UserDomainServiceInterface,
        user_repository:UserRepositoryInterface,
        user_facrtory:UserFactoryInterface
    ){
        this.user_domain_service = user_domain_service;
        this.user_repository = user_repository;
        this.user_factory = user_facrtory;
    }

    create(request: CreateUserRequest): CreateUserResult {


        if(this.user_domain_service.existByEmail(new UserEmail(request.user_name))){
            return new CreateUserResult(
                false,
                null
            );
        }

        const user = this.user_factory.create(
            request.user_name,
            request.nick_name,
            request.role,
            request.link_accounts
        );

        if(!this.user_repository.save(user)){
            return new CreateUserResult(
                false,
                null,
            );
        }

        return new CreateUserResult(
            true,null
        );
    }
}