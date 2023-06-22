const express = require("express");
const router = express.Router();
const writerController = require("../controllers/writerController");
const authController = require("../controllers/authController");

router.get("/writer", writerController.allWriters);
router.post("/writer", writerController.newWriter, authController.createToken);
router.get("/writer/:id", writerController.oneWriter);
router.put("/writer/:id", writerController.updateWriter);
router.delete("/writer/:id", writerController.deleteWriter);

module.exports = router;
