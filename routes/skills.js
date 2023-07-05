var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");
const skills = require("../controllers/skills");

// All actual paths starts with "/skills"

/* GET users listing. */
// GET /skills
router.get("/", skillsCtrl.index);

module.exports = router;
