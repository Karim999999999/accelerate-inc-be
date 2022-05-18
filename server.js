import express from 'express';
import cors from 'cors';
import { port } from './config/environment.js';
import router from './config/router.js';
import { connectToDb } from './db/helpers.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

async function runServer() {
  console.log('Connecting to db...');
  await connectToDb();
  console.log('Database connected');
  app.listen(port, () => console.log(`App is listening on port: ${port}`));
}

runServer();
