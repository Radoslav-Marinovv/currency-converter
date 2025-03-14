// NON COMMERCIAL PROJECT - USED FOR EDUCATIONAL PURPOSES ONLY

import dotenv from 'dotenv';
import path from 'path';
import Currency from "../models/currency.model.js";
import { CURRENCY_CODES, INTERVAL_TIME_IN_MS_TWO_HOURS } from "../constants/constants.js";

const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env') });
}

const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY || '';
const CURRENCY_API_URL = process.env.CURRENCY_API_URL || '';

const getNewCurrencyDataFromAPI = async () => {
  try {
    const response = await fetch(CURRENCY_API_URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "apikey": CURRENCY_API_KEY,
      },
    });
    const currencyJSON = await response.json();
    return currencyJSON;
  }
  catch (error) {
    console.error('Error:', error.message);
  }
};

const createMapObjectFromCurrencyData = (currencyData) => {
  return Object.entries(currencyData.data).map(([key, value]) => {
    const flag = key[0].toUpperCase() + key[1].toUpperCase();
    return {
      nameShort: key,
      nameFull: CURRENCY_CODES[key] || 'Unknown',
      exchangeRateToOneUSD: value,
      countryFlag: `https://flagsapi.com/${flag}/shiny/64.png`,
    };
  });
};

const updateOrAddCurrencyData = async (currencyData) => {
  currencyData.forEach(async (currency) => {
    if (!currency.nameShort || !currency.nameFull || !currency.exchangeRateToOneUSD) {
      console.log('Invalid currency data:', currency);
      return;
    };

    const newCurrency = new Currency(currency);
    const isExisting = await Currency.findOne({ nameShort: currency.nameShort });

    if (isExisting) {
      return await isExisting.updateOne(currency);
    } else {
      return await newCurrency.save();
    }
  });
};

const setNewCurrencyDataToDB = async () => {
  try {
    const currenciesJSON = await getNewCurrencyDataFromAPI();
    const rdyForDB = createMapObjectFromCurrencyData(currenciesJSON);
    updateOrAddCurrencyData(rdyForDB);
  }
  catch (error) {
    console.error(error.message);
  }
};

export default function getCurrencyData() {
  try {
    setNewCurrencyDataToDB();
    setInterval(() => {
      const newDataTime = new Date().toLocaleTimeString();
      setNewCurrencyDataToDB();
      console.info(`${newDataTime}: Data updated`);
    }, INTERVAL_TIME_IN_MS_TWO_HOURS);
  } catch (error) {
    console.log('Error:', error.message);
  }
};