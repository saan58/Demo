const express = require('express');
const router = express.Router();
const register = require("../controller/register"); // Import the register function

router.post('/add', register); // Use the register function as the callback for the '/add' route

router.get("/", (req, res) => {
    res.render('index', { title: "Home Page" });
});

router.get("/add", (req, res) => {
    res.render("add_users", { title: "Add Users" });
});

module.exports = router;