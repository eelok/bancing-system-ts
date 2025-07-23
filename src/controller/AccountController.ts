import { Request, Response, NextFunction } from "express";
import { RequestAccount } from "../models/RequestAccount";
import { HttpStatusCode } from "../HttpStatusCode";
import { AccountService } from "../service/AccountService";
import { ResponseAccount } from "../models/ResponseAccount";
import { HttpException } from "../exception/HttpException";

export class AccountController {

    private accountService: AccountService;
    private req: Request;
    private res: Response;
    private next: NextFunction;

    constructor(accountService: AccountService, req: Request, res: Response) {
        this.accountService = accountService;
        this.req = req;
        this.res = res;
    }


    public getAccount() {
        const id = +this.req.params.id;
        const foundAccount: ResponseAccount = this.accountService.getById(id);
        this.res.status(HttpStatusCode.OK).json(foundAccount);
    }

    public getAcountList() {
        const accountList = this.accountService.getAll();
        this.res.status(HttpStatusCode.OK).json(accountList);
    }

}



