import express from 'express';
import { createCurrencyController, getAllCurrenciesController } from '../controllers/currency.controller.js';

const router = express.Router();

router.get('/', getAllCurrenciesController);
router.post('/', createCurrencyController);

export default router;