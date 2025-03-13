import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { mongodbConnect } from './config/db.js';
import currencyRoutes from './routes/currency.route.js';
import getCurrencyData from './services/getCurrencyData.service.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
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
  await mongodbConnect();
  console.log(`${serverStarted}: Server is running in Production on port ${PORT}`);
}

getCurrencyData();