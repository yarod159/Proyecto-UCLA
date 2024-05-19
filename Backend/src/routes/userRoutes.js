
const express = require("express");
const router = express.Router();

const { getUsers} = require("../controllers/userController");
const {getProfile,createProfile} = require("../controllers/ProfileControllers")
const authMiddleware = require("../middlewares/session");


router.get("/get-users", getUsers);
router.get("/get-profile/:userId",authMiddleware,getProfile);
router.post("/post-profile/:userId", authMiddleware, createProfile);


module.exports = router;
