const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
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
