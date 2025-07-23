export interface ResponseAccount {
    id: number;
    fullName: string;
    iban: string;
    currency: string;
    balance: number;
    withdrawPerDayLimit: number;
}