import express from 'express';
import { getAllCurrenciesController } from '../controllers/currency.controller.js';

const router = express.Router();

router.get('/', getAllCurrenciesController);

export default router;