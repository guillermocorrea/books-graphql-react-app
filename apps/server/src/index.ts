require('dotenv').config();

import { logger } from './middlewares/logger.middleware';
import { server } from './server';

const app = server();
app.listen(app.get('port'), () =>
  logger.info(`Server listening on port ${app.get('port')}`)
);
