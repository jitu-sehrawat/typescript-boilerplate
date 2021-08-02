/* eslint-disable require-jsdoc */
import { HealthCheckRoute } from './misc/healthcheck';
import { SwaggerRoute } from './misc/swagger';
import Route from '@interfaces/routes.interface';

class Routes {
  public routes: Route[];
  constructor() {
    this.routes = [new HealthCheckRoute(), new SwaggerRoute()];
  }
}

export default Routes;
