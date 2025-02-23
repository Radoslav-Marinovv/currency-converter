import Currency from "../models/currency.model.js";

export const getAllCurrenciesController = async (req, res) => {
  try {
    const currencies = await Currency.find();
    !currencies ?
      res.status(404).json({ message: 'No currencies found' }) :
      res.status(200).json({ currencies });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createCurrencyController = async (req, res) => {
  try {
    const currency = req.body;

    if (!currency.nameShort || !currency.nameFull || !currency.country || !currency.exchangeRateToOneUSD) {
      return res.status(400).json({ message: 'Invalid request' });
    };

    const newCurrency = new Currency(currency);
    await newCurrency.save();
    res.status(201).json({ message: 'Currency created successfully', currency: newCurrency });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
};

export const deleteCurrencyController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Invalid request' });
    };

    const deleted = await Currency.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Currency not found' });
    };

    res.status(200).json({ message: 'Currency deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateCurrencyController = async (req, res) => {
  try {
    const { id } = req.params;
    const incomingUpdate = req.body;

    if (!id || !incomingUpdate) {
      return res.status(400).json({ message: 'Invalid request' });
    }

    await Currency.findByIdAndUpdate(id, incomingUpdate);
    res.status(200).json({ message: 'Currency updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};