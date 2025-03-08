import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import { mongodbConnect } from './config/db.js';
import currencyRoutes from './routes/currency.route.js';
import getCurrencyData from './services/getCurrencyData.service.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: ORIGIN }));
app.use(express.json());

app.use('/api/currency', currencyRoutes);

app.listen(PORT, () => {
  const serverStarted = new Date().toLocaleTimeString();
  mongodbConnect();
  console.log(`${serverStarted}: Server is running on port ${PORT}`);
});

getCurrencyData();