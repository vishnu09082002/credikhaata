const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.post("/", loanController.createLoan);
router.get("/", loanController.getLoans);

module.exports = router;
