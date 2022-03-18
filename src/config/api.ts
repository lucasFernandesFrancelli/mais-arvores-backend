export default (): {
  PORT: number;
} => {
  return {
    PORT: Number(process.env.API_REST_PORT) ?? 4000,
  };
};
