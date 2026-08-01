if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const {
  geocodeListingLocation,
  isValidPoint,
} = require("../utility/mapTiler.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderstay";

const backfillGeometry = async () => {
  await mongoose.connect(MONGO_URL);

  const listings = await Listing.find({});
  let updated = 0;
  let skipped = 0;
  const failures = [];

  for (const listing of listings) {
    if (isValidPoint(listing.geometry)) {
      skipped += 1;
      continue;
    }

    try {
      const geometry = await geocodeListingLocation(
        listing.location,
        listing.country,
      );
      await Listing.updateOne({ _id: listing._id }, { $set: { geometry } });
      updated += 1;
    } catch (error) {
      failures.push({
        id: listing._id,
        location: `${listing.location}, ${listing.country}`,
        message: error.message,
      });
    }
  }

  console.log(`Listings checked: ${listings.length}`);
  console.log(`Geometry added: ${updated}`);
  console.log(`Already valid: ${skipped}`);
  console.log(`Failed: ${failures.length}`);

  for (const failure of failures) {
    console.error(`${failure.id} | ${failure.location} | ${failure.message}`);
  }

  if (failures.length > 0) {
    process.exitCode = 1;
  }
};

backfillGeometry()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
