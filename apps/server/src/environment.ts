interface Environment {
  port: number | string;
}

export const environment: Environment = {
  port: process.env.PORT || 4100,
};
