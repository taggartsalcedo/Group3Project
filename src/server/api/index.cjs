
const router = require("express").Router();

// /api
router.get('/', (req, res) => {
  res.send('Hello api!')
})

// /api/user

// router.use("/user", require("./user.cjs"));

// /api/movie

router.use("/movie", require("./movie.cjs"));


module.exports = router;