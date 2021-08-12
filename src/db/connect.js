import logger from '../logger';
import createSequelizeConnection from './sequelizeConnection';

async function connect() {
  try {
    const sequelizeConnection = createSequelizeConnection();
    await sequelizeConnection.authenticate();
    logger.info('Database connected');
  } catch (error) {
    logger.error('Database connection error', error);
  }
}

export default connect;