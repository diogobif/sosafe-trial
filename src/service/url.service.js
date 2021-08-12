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
  }
}

function clearFilter(filter) {
  const entries = Object.entries(filter);
  let filteredEntries = entries.filter(([key,val]) => val);
  return Object.fromEntries(filteredEntries);
}

export async function searchData(queryString) {
  try {
    const { date } = queryString;
    const queryResult = await Url.findAll({
      attributes: ['domain', 'score', 'attributes', 'createdAt'],
      where: date ? Sequelize.where(Sequelize.fn('date', Sequelize.col('createdAt')), '=', date) : {},
      order: [['createdAt', 'ASC']]
    });
    
    return JSON.stringify(queryResult);
  } catch (error) {
    logger.error(error);
    return false;
  }
}