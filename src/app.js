import express from 'express'
import config from 'config';
import log from './logger';
import connect from './db/connect';
import routes from './routes';

const port = config.get('port');
const host = config.get('host');

const app = express();

app.use(express.json());

app.listen(port, host, () => {
  log.info(`Server listening on http://${host}:${port}`);
  connect();
  routes(app);
});