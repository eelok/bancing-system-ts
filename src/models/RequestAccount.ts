export interface RequestAccount {
    fullName: string;
    iban: string;
    currency: string;
    balance: number;
    withdrawPerDayLimit: number;
}