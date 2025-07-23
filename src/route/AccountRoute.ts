import { Router, Request, Response } from 'express';
import { AccountController } from '../controller/AccountController';
import { accountList } from '../db/data';
import { AccountMapper } from '../mapper/AccountMapper';
import { AccountRepository } from '../repository/AccountRepository';
import { AccountService } from '../service/AccountService';

const router = Router();
const accountRepository = new AccountRepository(accountList)
const accountMapper = new AccountMapper();
const accountService = new AccountService(accountRepository, accountMapper);



router.get('/api/v1/account/:id', (req: Request, res: Response) => {
    const accountController = new AccountController(accountService, req, res);
    accountController.getAccount();
});