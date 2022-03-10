import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv-flow';

import '../../container';

import createConnection from '../typeorm';
import { errorsHandler } from '../../handlers/ErrorsHandler';

config({ silent: true });

import { routes } from './routes';

const app = express();

createConnection()
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Cannot connect to database'));

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorsHandler);

export { app };
