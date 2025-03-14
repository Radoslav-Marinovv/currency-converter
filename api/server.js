import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import { mongodbConnect } from './config/db.js';
import currencyRoutes from './routes/currency.route.js';
import getCurrencyData from './services/getCurrencyData.service.js';

const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.join(__dirname, '../*') });
}

const app = express();
const PORT = process.env.PORT || '';
const ORIGIN = process.env.ORIGIN || '';

app.use(cors({ origin: ORIGIN }));
app.use(express.json());

app.use('/api/currency', currencyRoutes);

const serverStarted = new Date().toLocaleTimeString();

if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    mongodbConnect();
    console.log(`${serverStarted}: Server is running in Development on port ${PORT}`);
  });
} else {
  mongodbConnect();
  console.log(`${serverStarted}: Server is running in Production on port ${PORT}`);
}

getCurrencyData();