import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Test completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
})