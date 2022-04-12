export default (): {
  DIALECT: string;
  HOST: string;
  PORT: number;
  NAME: string;
  TEST_NAME: string;
  USER: string;
  PASSWORD: string;
} => {
  return {
    DIALECT: process.env.DB_DIALECT ?? 'mysql',
    HOST: process.env.DB_HOST ?? 'us-cdbr-east-05.cleardb.net',
    PORT: Number(process.env.DB_PORT) ?? 3306,
    NAME: process.env.DB_NAME ?? 'heroku_ca4507189fd2c81',
    TEST_NAME: process.env.DB_TEST_NAME ?? '',
    USER: process.env.DB_USER ?? 'bf346aba9bb7c4',
    PASSWORD: process.env.DB_PASSWORD ?? '51fc4007',
  };
};
