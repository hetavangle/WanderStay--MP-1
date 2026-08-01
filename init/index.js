if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { geocodeListingLocation } = require("../utility/mapTiler.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderstay";

const initDB = async () => {
  const listings = [];

  for (const listing of initData.data) {
    const geometry = await geocodeListingLocation(
      listing.location,
      listing.country,
    );
    listings.push({
      ...listing,
      owner: "6a66103d00e17b06efd990d2",
      geometry,
    });
  }

  await Listing.deleteMany({});
  await Listing.insertMany(listings);
  console.log("data was initialized");
};

const main = async () => {
  await mongoose.connect(MONGO_URL);
  await initDB();
};

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
