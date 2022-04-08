import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv-flow';

import '../../container';

import createConnection from '../typeorm';
import { errorsHandler } from '../../handlers/ErrorsHandler';

import { routes } from './routes';

config({ silent: true });

const app = express();

createConnection()
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Cannot connect to database'));

app.use(cors());

app.use(express.json());

console.log(`${process.cwd()}/upload`);

app.use(routes);
app.use('/products/download', express.static(`${process.cwd()}/uploads`));

app.use(errorsHandler);

export { app };
