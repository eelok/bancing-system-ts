import { ResponseAccountBuilder } from "../builder/ResponseAccountBuilder";
import { Account } from "../models/Account";
import { ResponseAccount } from "../models/ResponseAccount";

export class AccountMapper {

    public toResponseAccount(account: Account): ResponseAccount {
        return new ResponseAccountBuilder()
            .setId(account.id)
            .setFullName(account.fullName)
            .setIban(account.iban)
            .setCurrency(account.currency)
            .setBalance(account.balance)
            .setWithdrawPerDayLimit(account.withdrawPerDayLimit)
            .build()
    }
}