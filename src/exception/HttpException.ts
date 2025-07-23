import e from "express";


export class HttpException extends Error {

    message: string;
    statusCode?: number;
    error?: string;


    constructor(message: string, statusCode?: number, error?: string) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
    }

}