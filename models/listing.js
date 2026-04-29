import mongoose from "mongoose";
const Schema = monogoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String },
  image: {
    type: String,
    set: (v) => {
      v === ""
        ? "https://www.musafir.com/blog/the-entire-country-of-sweden-is-listed-in-airbnb"
        : v;
    },
  },
  price: { type: Number },
  location: { type: String },
  country: { tyep: String },
});

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;
