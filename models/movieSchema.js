import { model, Schema } from "mongoose";

const movieSchema = new Schema({
  name: { required: true, type: String },
  genre: { type: Schema.Types.ObjectId, ref: "Genre" },
  numberInStock: Number,
});

const Movie = model("Movie", movieSchema);

export default movieSchema;
const _Movie = Movie;
export { _Movie as Movie };
