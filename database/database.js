import mongoose from "mongoose";
    mongoose.set('strictQuery', true);

const uri = "mongodb+srv://monsters.3fce8hk.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const credentials = "<path_to_certificate>";
const clientOptions = {
  tlsCertificateKeyFile: credentials,
  serverApi: { version: '1', strict: true, deprecationErrors: true }
};
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

