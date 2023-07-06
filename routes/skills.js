var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");
const skills = require("../controllers/skills");

// All actual paths starts with "/skills"

// GET /skills
router.get("/", skillsCtrl.index);

// Get /skills/new <- Define BEFORE show route
router.get("/new", skillsCtrl.new);

// GET /skills/:id
router.get("/:id", skillsCtrl.show);

// GET /skills
router.post("/", skillsCtrl.create);

// GET /skills/:id
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
