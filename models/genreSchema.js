import { model, Schema } from "mongoose";

const genreSchema = new Schema({
  name: { required: true, type: String },
  createdAt: { type: Date, default: Date.now },
});

const Genre = model("Genre", genreSchema);

export { genreSchema, Genre };
