/* eslint-disable require-jsdoc */
import { connect, connection } from 'mongoose';

class DBMongoose {
  private MONGO_URI: string;
  constructor() {
    this.MONGO_URI =
      process.env.MONGO_URI || 'mongodb://localhost:27017/boilerplate';
  }

  public async connect() {
    try {
      await connect(this.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      if (connection.readyState === 0) {
        console.log('DB: Mongodb disconnected');
      }
      if (connection.readyState === 1) {
        console.log('DB: Mongodb connected');
      }
      if (connection.readyState === 2) {
        console.log('DB: Mongodb connecting');
      }
      if (connection.readyState === 3) {
        console.log('DB: Mongodb disconnecting');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default DBMongoose;
