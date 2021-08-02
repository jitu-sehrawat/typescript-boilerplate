/* eslint-disable require-jsdoc */
import { NextFunction, Request, Response, Router } from 'express';
// import IndexController from '@controllers/index.controller';
import Route from '@interfaces/routes.interface';
// import Route from '../../interfaces/routes.interface';

export class HealthCheckRoute implements Route {
  public path = '/health';
  public router = Router();
  // public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          res.status(200).send({ data: 'hello from health check' });
        } catch (error) {
          next(error);
        }
      }
    );
  }
}

// export default HealthCheckRoute;
