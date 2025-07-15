const express = require("express");
const router = express.Router();
const upload = require('../upload');
const {info_save,getCompetition,getDetails,searchCompetitions} = require("../controllers/competitionControllers");



// const {
//   createCompetition,
//   getCompetitions,
//   getCompetition,
//   updateCompetition,
//   deleteCompetition
// } = require("../controllers/competitionController");

router.post("/",upload.single('image'), info_save);
router.get("/dis", getCompetition);
// router.get("/filter_comp", getCompetition);
// router.put("/:id", updateCompetition);
router.get('/search',searchCompetitions);
router.get('/dis/:id',getDetails);
// router.delete("/:id", deleteCompetition);


module.exports = router;
