import { Router, Request, Response } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.get('/hello', userController.helloWorld);
router.get('/error', userController.throwError);

export default router;
