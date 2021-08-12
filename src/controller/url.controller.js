import config from "config";
import api from '../api';
import logger from '../logger';
import { createUrl, searchData } from "../service/url.service"

export async function checkUrl(req, res) {
  const { url } = req.body;
  const apiKey = config.get('api.key');
  try {
    const { data } = await api.get(`single?apikey=${apiKey}&domain=${url}&refresh=true`);
    const urlToRegister = {
      domain: data.domain,
      score: data.score,
      attributes: { 
        ...data.attributes, 
        meta: data.meta, 
        created_at: data.created_at, 
        updated_at: data.updated_at 
      }
    };

    await createUrl(urlToRegister);

    return res.send({ result: data });

  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
}

export async function getUrlData(req, res) {
  try {
    const result = await searchData(req.query);
    return res.send(result);

  } catch (error) {
    logger.error(error);
    return res.sendStatus(500);
  }
  
}