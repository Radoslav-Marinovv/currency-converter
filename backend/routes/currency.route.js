import express from 'express';
import { createCurrencyController, deleteCurrencyController, getAllCurrenciesController } from '../controllers/currency.controller.js';

const router = express.Router();

router.get('/', getAllCurrenciesController);
router.post('/', createCurrencyController);
router.delete('/:id', deleteCurrencyController);

export default router;