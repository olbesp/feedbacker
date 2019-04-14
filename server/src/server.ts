import express from 'express';

const app: express.Application = express();

app.get(
  '/',
  (req, res): void => {
    res.send('Hello World!');
  }
);

const PORT: number | string = process.env.PORT || 3090;

app.listen(PORT, () => {
  // console.log('Listening on port 3090!');
});
