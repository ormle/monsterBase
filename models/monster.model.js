import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true},
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    address: {type: Object, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    company: { type: Object, required: true },
    image_url: { type: String, required: true },
  },
  { timestamps: true, strictQuery: true }
);

const Monster = mongoose.model("Monster", MonsterSchema);

export default Monster;