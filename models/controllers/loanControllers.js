const Loan = require("../models/Loan");

exports.createLoan = async (req, res) => {
  try {
    const loan = await Loan.create({ ...req.body, userId: req.user.id, balance: req.body.amount });
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ error: "Invalid loan data" });
  }
};

exports.getLoans = async (req, res) => {
  const loans = await Loan.find({ userId: req.user.id }).populate("customerId");
  res.json(loans);
};
