import { Sequelize } from "sequelize";
import config from 'config';
import logger from '../logger';
const dbDatabase = config.get("db.database");
const dbUsername = config.get("db.user");
const dbPassword = config.get("db.password");
const dbHost = config.get("db.host");

const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
});

async function connect() {
  try {
    await sequelize.authenticate();
    logger.info('Database connected');
  } catch (error) {
    logger.error('Database connection error', error);
  }
}

export default connect;