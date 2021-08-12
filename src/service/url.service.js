import Url from "../models/url.model";
import logger from "../logger";
import Sequelize from "sequelize";

export async function createUrl(urlData) {
  try {
    const url = Url.build(urlData);
    const result = await url.save();
    return result.toJSON();
  } catch (error) {
    logger.error(error);
    return false;
  }
}

export async function searchData(queryString) {
  try {
    const { startDate, endDate } = queryString;
    const queryResult = await Url.findAll({
      attributes: ['domain', 'score', 'attributes', 'createdAt'],
      where: startDate && endDate ? Sequelize.where(Sequelize.fn('date', Sequelize.col('createdAt')), 'BETWEEN', [startDate, endDate]) : {},
      order: [['createdAt', 'ASC']]
    });
    
    return JSON.stringify(queryResult);
  } catch (error) {
    logger.error(error);
    return false;
  }
}