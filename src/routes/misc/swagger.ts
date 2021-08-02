/* eslint-disable require-jsdoc */
import { Router } from 'express';
// import IndexController from '@controllers/index.controller';
import Route from '@interfaces/routes.interface';
// import Route from '../../interfaces/routes.interface';

export class SwaggerRoute implements Route {
  public path = '/swagger';
  public router = Router();
  // public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, async (req, res, next) => {
      try {
        res.status(200).send({ data: 'hello from Swagger' });
      } catch (error) {
        next(error);
      }
    });
  }
}

// export default SwaggerRoute;
