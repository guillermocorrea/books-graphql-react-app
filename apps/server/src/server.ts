import 'reflect-metadata';
import express from 'express';
import exphbs from 'express-handlebars';
import { expressLogger } from './middlewares/logger.middleware';
import path from 'path';
import './di.container';

import IndexRoutes from './routes';
import { errorHandler } from './middlewares/error-handler.middleware';

export function server() {
  const app = express();

  // Settings
  app.set('port', process.env.PORT || 3000);
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
