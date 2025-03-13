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

app.listen(PORT, async () => {
  const serverStarted = new Date().toLocaleTimeString();
  await mongodbConnect();
  console.log(`${serverStarted}: Server is running on port ${PORT}`);
});

getCurrencyData();