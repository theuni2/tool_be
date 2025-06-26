const express = require("express");
const router = express.Router();
const {info_save,getCompetition} = require("../controllers/competitionControllers");


// const {
//   createCompetition,
//   getCompetitions,
//   getCompetition,
//   updateCompetition,
//   deleteCompetition
// } = require("../controllers/competitionController");

router.post("/", info_save);
router.get("/dis", getCompetition);
// router.get("/:id", getCompetition);
// router.put("/:id", updateCompetition);
// router.delete("/:id", deleteCompetition);


module.exports = router;
