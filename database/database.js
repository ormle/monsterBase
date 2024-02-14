import mongoose from "mongoose";
    mongoose.set('strictQuery', true);

const uri = "mongodb+srv://romel178:Z7qgMOs4x1aSFvN9@cluster0.jeduox4.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
    try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true} );
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas!");
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

