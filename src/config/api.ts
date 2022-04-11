export default (): {
  PORT: number;
} => {
  return {
    PORT: Number(process.env) ?? 4000,
  };
};
