import mongoose from "mongoose";
    mongoose.set('strictQuery', true);

const uri = "mongodb+srv://315:s0szUcdXdn782rIO@monsters.3fce8hk.mongodb.net/?retryWrites=true&w=majority";
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
//run().catch(console.dir);

