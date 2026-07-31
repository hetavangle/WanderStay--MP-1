const express = require("express");
const router = express.Router();
const wrapAsync = require("../utility/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const ListingController = require("../controllers/listings.js");

//main route
router.get("/", wrapAsync(ListingController.index));

//new hotel adding  form route
router.get("/new", isLoggedIn, wrapAsync(ListingController.renderNewForm));

//Show route
router.get("/:id", wrapAsync(ListingController.showListing));

//new hotel addition route
router.post("/", validateListing, isLoggedIn, wrapAsync(ListingController.createListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(ListingController.renderEditForm));

//update route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(ListingController.updateListing));

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing));

module.exports = router;
