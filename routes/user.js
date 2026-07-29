const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utility/wrapAsync.js");
const passport = require("passport")
const { savedRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post(
    "/signup",
    wrapAsync(async (req, res, next) => {
        try {
            let { username, email, password } = req.body;
            const newUser = new User({ email, username });
            const registeredUser = await User.register(newUser, password);
            console.log(registeredUser);
            req.login(registeredUser, (err) => {
                if (err) {
                    return next(err);
                }
                req.flash("success", "Registration successful! Welcome to WanderStay.");
                return res.redirect("/listings");
            });
        } catch (e) {
            req.flash("error", e.message);
            return res.redirect("/signup");
        }
    }),
);

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});
router.post(
    "/login", savedRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    async (req, res) => {
        req.flash("success", "Good to see you again. Happy exploring!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    },
);

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged out successfully. See you again!");
        res.redirect("/listings");
    })
})

module.exports = router;
