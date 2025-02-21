import { mongodbConnect } from "../config/db.js";

export const currencyController = (req, res) => {
  try {
    mongodbConnect();
    res.status(200).json({ message: 'Test completed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};