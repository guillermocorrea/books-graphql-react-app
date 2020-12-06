import { resolvers } from './resolvers/resolvers';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { expressLogger, errorHandler } from '@guillermocorrea/express-common';
import './db';

import { environment } from './environment';
import { movieSchema } from './schema/schema';

export function server() {
  const app = express();

  // Settings
  app.set('port', environment.port);

  // Middlewares
  if (process.env.NODE_ENV !== 'test') {
    app.use(expressLogger);
  }
  app.use(cors());

  // GraphQL

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: movieSchema,
      graphiql: true,
      rootValue: resolvers,
    })
  );

  // Routes

  // Error handler
  app.use(errorHandler);

  return app;
}
