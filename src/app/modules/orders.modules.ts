import { Schema, model } from "mongoose";
import { TProduct } from "./orders/orders.interface";

const productSchema = new Schema<TProduct>({
  userId: {
    type: String,
    required: [true, 'User Is is required']
  },
  productName: {
    type: String,
    required: [true, 'Product is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required.'],
  },
});


export const Order = model<TProduct>('order', productSchema)