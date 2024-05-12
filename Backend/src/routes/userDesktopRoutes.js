
const express = require("express");
const router = express.Router();

const { postUserDesktop, getUserDesktop } = require("../controllers/userDesktopControllers");


router.post("/post-userDesktop", postUserDesktop);
router.get("/get-userDesktop", getUserDesktop  );
module.exports = router;
