const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({ ...req.body, userId: req.user.id });
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: "Invalid customer data" });
  }
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find({ userId: req.user.id });
  res.json(customers);
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!customer) return res.status(404).json({ error: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const result = await Customer.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!result) return res.status(404).json({ error: "Customer not found" });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(400).json({ error: "Delete failed" });
  }
};
