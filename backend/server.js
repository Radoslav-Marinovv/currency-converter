import express from 'express';
import dotenv from 'dotenv';

import { mongodbConnect } from './config/db.js';
import currencyRoutes from './routes/currency.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/currency', currencyRoutes);

app.listen(PORT, () => {
  mongodbConnect();
  console.log(`Server is running on port ${PORT}`);
});

