export default function (app) {
  app.get('/ping', (req, res) => res.sendStatus(200));
}