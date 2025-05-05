const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
  trustScore: {
    type: Number,
    min: 0,
    max: 10,
    default: 5,
  },
  creditLimit: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
