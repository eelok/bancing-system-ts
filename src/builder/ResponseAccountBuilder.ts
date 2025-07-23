import { ResponseAccount } from "../models/ResponseAccount";

export class ResponseAccountBuilder {

    private responseAccount: Partial<ResponseAccount> = {}

    public setId(id: number): ResponseAccountBuilder {
        this.responseAccount.id = id;
        return this;
    }

    setFullName(fullName: string): ResponseAccountBuilder {
        this.responseAccount.fullName = fullName;
        return this;
    }

    setIban(iban: string): ResponseAccountBuilder {
        this.responseAccount.iban = iban;
        return this;
    }

    setCurrency(currency: string): ResponseAccountBuilder {
        this.responseAccount.currency = currency;
        return this;
    }

    setBalance(balance: number): ResponseAccountBuilder {
        this.responseAccount.balance = balance;
        return this;
    }

    setWithdrawPerDayLimit(withdrawPerDayLimit: number): ResponseAccountBuilder {
        this.responseAccount.withdrawPerDayLimit = withdrawPerDayLimit;
        return this;
    }

    build(): ResponseAccount {
        if (this.responseAccount.id === undefined ||
            this.responseAccount.fullName === undefined ||
            this.responseAccount.iban === undefined ||
            this.responseAccount.currency === undefined ||
            this.responseAccount.balance === undefined ||
            this.responseAccount.withdrawPerDayLimit === undefined
        ) {
            throw new Error('Missing required fields for ResponseAccount')
        }
        return this.responseAccount as ResponseAccount;
    }
}