import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { resolve } from 'node:path';
import { config } from 'dotenv-flow';
import database from '../config/database';

config({ silent: true });

const databaseConfig = database();

const dataSource = new DataSource({
  type: 'mysql',
  host: databaseConfig.HOST,
  port: databaseConfig.PORT,
  username: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.NAME,
  synchronize: false,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [
    resolve(__dirname, 'entities/*.{ts,js}'),
    resolve(
      __dirname,
      '..',
      '..',
      '..',
      'modules/**/infra/typeorm/entities/*.{ts,js}',
    ),
  ],
  migrations: [resolve(__dirname, 'migrations/*.{ts,js}')],
  migrationsRun: true,
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
