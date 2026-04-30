const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderstay";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi , i am root");
});

//main route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//details route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// app.get("/testListing", async (req, res) => {
//   let samplelisting = new Listing({
//     title: "My home villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute,Goa",
//     country: "India",
//   });
//   await samplelisting.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

app.listen(8080, () => {
  console.log("server is listening to 8080");
});
