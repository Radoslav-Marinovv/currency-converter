import express from 'express';
import { mongodbConnect } from '../config/db.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    mongodbConnect();
    res.status(200).json({ message: 'Test completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;