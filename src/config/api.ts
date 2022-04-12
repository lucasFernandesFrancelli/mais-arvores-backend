export default (): {
  PORT: number;
} => {
  return {
    PORT: Number(process.env.PORT) || 4000,
  };
};
