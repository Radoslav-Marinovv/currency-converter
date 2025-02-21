import express from 'express';
import { currencyController } from '../controllers/currency.controller.js';

const router = express.Router();

router.get('/', currencyController);

export default router;