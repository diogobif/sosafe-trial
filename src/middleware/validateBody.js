import logger from '../logger';

const validateBody = (req, res, next) => {
  if (!req.body || !req.body.url) {
    logger.error('Without url');
    res.sendStatus(400);
  }

  return next();
}

export default validateBody;