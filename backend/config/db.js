import mongoose from 'mongoose';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const mongodbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
    await mongoose.disconnect();
    console.log("Connection to MongoDB Closed");
  }
};

export const mongodbDisconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("Connection to MongoDB Closed");
  } catch (error) {
    console.error("Error disconnecting from MongoDB: ", error.message);
  }
};
