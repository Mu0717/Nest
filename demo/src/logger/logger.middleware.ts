import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  /* req:请求参数  */
  use(req: Request, res: Response, next: NextFunction) {
    /* console.log('LoggerMiddleware');
    console.log('req', req);
    console.log('res', res); */

    next();
  }
}
/* 函数中间件，可以配置为全局中间件 */
export const logger = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.originalUrl, 'logger');
  next();
};
