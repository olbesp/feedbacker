import express from 'express';
import dotenv from 'dotenv';

import * as auth from './controllers/auth';

import './services/passport';

dotenv.config();

const app: express.Application = express();

app.get('/auth/google', auth.googleAuth);
app.get('/auth/google/callback', auth.googleAuthCallback);

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT);
