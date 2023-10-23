const { Schema, model } = require('mongoose');

const dealsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Group is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    price: {
      type: String,
      required: [true, 'Name is required'],
    },
    ticket: {
      type: Number,
      required: [true, 'Price is required'],
    },
    yield: {
      type: Number,
    },
    daysLeft: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    timestamps: {
      type: Number,
      default: Number(new Date()),
    },
  },
  { versionKey: false, timestamps: true }
);

const Deal = model('deals', dealsSchema);

module.exports = { Deal };
