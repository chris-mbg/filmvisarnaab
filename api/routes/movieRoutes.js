const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get("/", movieController.getFilteredMovies);
router.get("/:movieId", movieController.getMovieById);


module.exports = router;
