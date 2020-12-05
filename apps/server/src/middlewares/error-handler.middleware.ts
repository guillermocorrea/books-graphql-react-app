import { HttpBaseException } from './../exceptions/http-base.exception';
import { NextFunction, Request, Response } from 'express';
import { logger } from './logger.middleware';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(err, 'errorHandler');
  if (err instanceof HttpBaseException) {
    res.status(err.statusCode).send({ error: err.message });
  }
  res.status(500).send();
}
