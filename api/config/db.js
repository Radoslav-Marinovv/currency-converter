import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env') });
}

const MONGO_URI = process.env.MONGO_URI || '';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const mongodbConnect = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}`, clientOptions);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
    await mongoose.disconnect();
    console.log("Connection to MongoDB Closed");
  }
};
