interface Environment {
  port: number | string;
  mongodbUrl: string;
}

if (!process.env.MONGODB_URL) {
  throw new Error('MONGODB_URL is not set!');
}

export const environment: Environment = {
  port: process.env.PORT || 4200,
  mongodbUrl: process.env.MONGODB_URL,
};
