import { mongodbConnect, mongodbDisconnect } from "../config/db.js";
import Currency from "../models/currency.model.js";

export const getAllCurrenciesController = async (req, res) => {
  try {
    await mongodbConnect();
    const currencies = await Currency.find();
    !currencies ?
      res.status(404).json({ message: 'No currencies found', currencies: {} }) :
      res.status(200).json({ message: 'Currency controller', currencies });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  } finally {
    await mongodbDisconnect();
  }
};
