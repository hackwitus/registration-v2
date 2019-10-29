import { Request, Response, NextFunction } from 'express';

class UserController {
  constructor() {}

  public helloWorld(req: Request, res: Response) {
    res.send('Hello World');
  }

  public throwError(req: Request, res: Response, next: NextFunction) {
    return next(new Error('This is a test'));
  }
}

export default UserController;
