import mongoose from "mongoose";
    mongoose.set('strictQuery', true);

const uri = "mongodb+srv://romel178:Z7qgMOs4x1aSFvN9@cluster0.jeduox4.mongodb.net/?retryWrites=true&w=majority";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
export const connectDB = async () => {
    try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
    }
}

/*export const connectDB = async () => {
  const url = `mongodb://localhost:27017/monsters`;
  try {
    const connection = await mongoose.connect(url, {
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Failed to connect database:", e);
  }
};*/

