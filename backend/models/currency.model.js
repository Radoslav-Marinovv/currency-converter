import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  exchangeRateToOneUSD: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;