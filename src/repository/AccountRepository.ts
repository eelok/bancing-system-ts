import { Account } from "../models/Account";

export class AccountRepository {
    private accountList: Array<Account>;

    constructor(accountList: Array<Account>) {
        this.accountList = accountList;
    }

    public getById(id: number): Account | undefined {
        return this.accountList.find(account => account.id === id);
    }

    public getAll(): Account[] {
        return this.accountList;
    }
}