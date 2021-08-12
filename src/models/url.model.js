const { DataTypes } = require('sequelize');
import createSequelizeConnection from '../db/sequelizeConnection';
const sequelizeConnection = createSequelizeConnection();

const Url = sequelizeConnection.define('Url', {
  domain: {
    type: DataTypes.STRING,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  attributes: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  timestamps: true,
  updatedAt: false
});

// (async () => {
//   await sequelizeConnection.sync({ force: true });
// })();

export default Url;
