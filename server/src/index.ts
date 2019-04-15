import express from 'express';

const app: express.Application = express();

app.get(
  '/',
  (req, res): void => {
    res.send({ welcome: true });
  }
);

const PORT: number | string = process.env.PORT || 3090;

app.listen(PORT);
