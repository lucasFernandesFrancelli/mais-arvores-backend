import 'reflect-metadata';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import { config } from 'dotenv-flow';
import { resolve } from 'node:path';
import database from '../../../config/database';

config({ silent: true });

const databaseConfig = database();

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      entities: [
        resolve(__dirname, 'entities/*.{ts,js}'),
        resolve(
          __dirname,
          '..',
          '..',
          '..',
          'modules/**/infra/typeorm/entities/**/*.{ts,js}',
        ),
      ],
      migrations: [resolve(__dirname, 'migrations/*.{ts,js}')],
      database:
        process.env.NODE_ENV === 'test'
          ? databaseConfig.TEST_NAME
          : defaultOptions.database,
    }),
  );
};
