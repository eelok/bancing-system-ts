import { Router, Request, Response } from 'express';
import { AccountController } from '../controller/AccountController';
import { accountList } from '../db/data';
import { AccountMapper } from '../mapper/AccountMapper';
import { AccountRepository } from '../repository/AccountRepository';
import { AccountService } from '../service/AccountService';
import { idSchema } from '../validation/accaunt';
import { number } from 'joi';

const router = Router();
const accountRepository = new AccountRepository(accountList)
const accountMapper = new AccountMapper();
const accountService = new AccountService(accountRepository, accountMapper);


router.get('/:id', (req: Request, res: Response) => {
    const { error, value } = idSchema.validate(req.params);
    if (error) {
        return res.status(400).json({
            error: "Invalid Id param",
            details: error.details[0].message
        })
    }
    const accountController = new AccountController(accountService, req, res);
    accountController.getAccount(value.id);
});

router.get('/', (req: Request, res: Response) => {
    const accountController = new AccountController(accountService, req, res);
    accountController.getAcountList();
});


export {
    router
}