import { AccountRepository } from "../repository/AccountRepository";
import { ResponseAccount } from "../models/ResponseAccount";
import { Account } from "../models/Account";
import { AccountMapper } from "../mapper/AccountMapper";
import { HttpException } from "../exception/HttpException";
import { HttpStatusCode } from "../HttpStatusCode";

export class AccountService {

    private accountRepository: AccountRepository;
    private accountMapper: AccountMapper;


    constructor(accountRepository: AccountRepository, accountMapper: AccountMapper) {
        this.accountRepository = accountRepository;
        this.accountMapper = accountMapper;
    }

    public getById(id: number): ResponseAccount {
        const foundAccount: Account | undefined = this.accountRepository.getById(id);
        if (!foundAccount) {
            throw new HttpException(`account with id ${id} was not found`, HttpStatusCode.NOT_FOUND);
        }
        return this.accountMapper.toResponseAccount(foundAccount);
    }

    public getAll(): ResponseAccount[] {
        const accountsList = this.accountRepository.getAll();
        const accounts: Array<ResponseAccount> = accountsList
            .map(account => this.accountMapper.toResponseAccount(account));
        return accounts;
    }




}