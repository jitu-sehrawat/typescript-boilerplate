import 'dotenv/config';
import 'module-alias/register';
import App from './app';
import DBMongoose from './db/mongoose';

const start = async () => {
  try {
    // Validate all the ENV Varibles before Boostrapping.
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI must be defined');
    }

    // TODO: Connect to MongoDB.
    const dbMongoose = new DBMongoose();
    await dbMongoose.connect();

    // Bootstraping the Server.
    const app = new App();
    await app.listen();
  } catch (error) {
    console.log(`Error while Bootstraping Server: `, error);
    console.log(`Killing the server`);
    process.exit(1);
  }
};

start();
