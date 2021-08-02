/* eslint-disable require-jsdoc */
import HttpException from './HttpException';

class NotFoundException extends HttpException {
  constructor(message: string = 'Not Found') {
    super(404, message);
  }
}

export default NotFoundException;
