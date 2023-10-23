const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    productId: {
      type: String,
      required: [true, 'ProductId is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Image is required'],
    },
    password: {
      type: String,
      required: [true, 'Price is required'],
    },
    timestamps: {
      type: Number,
      default: Number(new Date()),
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model('users', userSchema);

module.exports = { User };
