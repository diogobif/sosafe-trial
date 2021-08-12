import { checkUrl, getUrlData } from "./controller/url.controller"
import validateBody from "./middleware/validateBody";
export default function (app) {
  app.get('/ping', (req, res) => res.sendStatus(200));

  app.post('/api/url/check', validateBody, checkUrl);

  app.get('/api/url', getUrlData);
}