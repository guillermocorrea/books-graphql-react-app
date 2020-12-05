import { BadRequestException, logger } from '@guillermocorrea/express-common';
import { TodoService } from './../services/todo.service';
import { NextFunction, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class IndexController {
  constructor(private todoService?: TodoService) {}

  index = (req: Request, res: Response) => {
    res.send('Hello World');
  };

  getTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!Number.isInteger(req.params.id)) {
        logger.error(`getTodo:id ${req.params.id} is not a number`);
        throw new BadRequestException('Invalid id parameter');
      }
      const todo = await this.todoService?.getTodo(
        Number.parseInt(req.params.id)
      );
      res.send(todo);
    } catch (error) {
      next(error);
    }
  };
}
