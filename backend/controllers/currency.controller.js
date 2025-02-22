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

export const createCurrencyController = async (req, res) => {
  try {
    const currency = req.body;

    if (!currency) {
      return res.status(400).json({ message: 'Invalid request' });
    };
    if (!currency.nameShort || !currency.nameFull || !currency.country || !currency.exchangeRateToOneUSD) {
      return res.status(400).json({ message: 'Invalid request' });
    };

    const newCurrency = new Currency(currency);

    await mongodbConnect()
    await newCurrency.save();

    res.status(201).json({ message: 'Currency created successfully', currency: newCurrency });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  } finally {
    await mongodbDisconnect();
  }
};

