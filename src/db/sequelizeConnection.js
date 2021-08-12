import { Sequelize } from "sequelize";
import config from 'config';

export default function createSequelizeConnection() {
  const dbDatabase = config.get("db.database");
  const dbUsername = config.get("db.user");
  const dbPassword = config.get("db.password");
  const dbHost = config.get("db.host");
  
  const sequelizeConnection = new Sequelize(dbDatabase, dbUsername, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    logging: false
  });

  return sequelizeConnection;
}