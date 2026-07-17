const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String },
  image: {
    type: String,
    //to check if image is null or undefined or doesnt exist
    default:
      "https://images.unsplash.com/photo-1759203111456-b63e81a03cec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //this is for checking image is there but link is empty (for client/user)
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1759203111456-b63e81a03cec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ]

});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }

})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
