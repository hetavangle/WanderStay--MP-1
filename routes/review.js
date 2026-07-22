const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utility/wrapAsync.js");
const ExpressError = require("../utility/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((e) => e.message).join(",");
        throw new ExpressError(400, error);
    } else {
        next();
    }
}

//reviews
//post review route
router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Your review has been submitted successfully.")
    res.redirect(`/listings/${listing._id}`);
}));

//delete review route
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Your review has been successfully deleted.");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;
