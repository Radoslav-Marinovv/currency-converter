import express from 'express';
import { createCurrencyController, deleteCurrencyController, getAllCurrenciesController, updateCurrencyController } from '../controllers/currency.controller.js';

const router = express.Router();

router.get('/', getAllCurrenciesController);
router.post('/', createCurrencyController);
router.delete('/:id', deleteCurrencyController);
router.patch('/:id', updateCurrencyController);

export default router;