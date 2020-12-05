require('dotenv').config();

import { logger } from '@guillermocorrea/express-common';
import { server } from './server';

const app = server();
app.listen(app.get('port'), () =>
  logger.info(`Server listening on port ${app.get('port')}`)
);
