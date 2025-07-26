import { Account } from "../models/Account";


export const accountList: Array<Account> = [
    {
        id: 100,
        fullName: "Maria Petri TS",
        iban: "DE2345600012",
        currency: "EURO",
        balance: 1050,
        withdrawPerDayLimit: 2000
    },
    {
        id: 200,
        fullName: "Jan Jan TS",
        iban: "LN21234560003",
        currency: "EURO",
        balance: 500,
        withdrawPerDayLimit: 1000
    }
]