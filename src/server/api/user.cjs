const router = require("express").Router();

// /api/user/
router.get("/", (req, res) => {
  res.send("Welcome to the user routes");
})

module.exports = router;