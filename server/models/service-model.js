const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  service: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  provider: { type: String, required: true },
  image: {
    type: String,
    default: '', // You can set a default image path if you want
  }
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
