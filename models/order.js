const { Schema, model } = require('mongoose');


const orderItemsSchema = new Schema({
  productId: {
    type: String,
    required: [true, 'ProductId is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  discount: {
    type: Number,
    required: [true, 'Discount is required'],
  },
  rate: {
    type: Number,
    required: [true, 'Rate is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

const orderSchema = new Schema(
  {
    user: {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
      },
      address: {
        type: String,
        required: [true, 'Address is required'],
      },
      phone: {
        type: String,
        required: [true, 'Phone is required'],
      },
      message: {
        type: String,
        required: [true, 'Message is required'],
      },
    },
    orderItems: [orderItemsSchema],
    totalCost: {
      type: Number,
      required: [true, 'TotalCost is required'],
    },
    discount: {
      type: Number,
    },

    timestamps: {
      type: Number,
      default: Number(new Date()),
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('orders', orderSchema);

module.exports = { Order };
