import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  nameShort: {
    type: String,
    required: true,
    unique: true,
  },
  nameFull: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  exchangeRateToOneUSD: {
    type: Number,
    required: true,
  },
  countryFlag: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
});

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;