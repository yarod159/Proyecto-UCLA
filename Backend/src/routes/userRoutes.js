
const express = require("express");
const router = express.Router();

const { getUsers} = require("../controllers/userController");
const {getProfile,createProfile, getUser, getProfileAll} = require("../controllers/ProfileControllers")
const authMiddleware = require("../middlewares/session");


router.get("/get-users", getUsers);
router.get("/profile",authMiddleware,getProfile);
router.get("/get-profile/:userId",authMiddleware,getUser);
router.post("/post-profile/", authMiddleware, createProfile);


module.exports = router;
