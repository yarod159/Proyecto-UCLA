const express = require("express");
const router = express.Router();

const {postGarantia, getGarantia, deleteGarantia} = require("../controllers/GarantiaControllers");

router.post("/post-garantia", postGarantia);
router.get("/get-garantia", getGarantia);
router.delete("/delete-Garantia/:id", deleteGarantia);

module.exports = router;