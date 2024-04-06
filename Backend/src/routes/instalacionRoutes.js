const express = require("express");
const router = express.Router();

const {postInstalacion, getInstalacion} = require("../controllers/InstalacionControllers");

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);

module.exports = router;
