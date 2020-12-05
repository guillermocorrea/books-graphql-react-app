import 'reflect-metadata';
import express from 'express';
import exphbs from 'express-handlebars';
import { expressLogger, errorHandler } from '@guillermocorrea/express-common';
import path from 'path';
import './di.container';

import IndexRoutes from './routes';
import { environment } from './environment';

export function server() {
  const app = express();

  // Settings
  app.set('port', environment.port);
  app.set('views', path.join(__dirname, 'views'));
  app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
      layoutsDir: path.join(app.get('views'), 'layouts'),
      partialsDir: path.join(app.get('views'), 'partials'),
      helpers: require('./lib/helpers'),
    })
  );
  app.set('view engine', '.hbs');

  // Middlewares
  if (process.env.NODE_ENV !== 'test') {
    app.use(expressLogger);
  }
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Routes
  app.use('/', IndexRoutes);

  // Static files
  app.use(express.static(path.join(__dirname, 'public')));

  // Error handler
  app.use(errorHandler);

  return app;
}
