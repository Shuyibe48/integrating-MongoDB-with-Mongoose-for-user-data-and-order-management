import { Order } from "../orders.modules";
import { TOrder } from "./orders.interface";

const createOrders = async (orderData: TOrder, userId: string) => {
  const order = {
      ...orderData,
    userId: userId,
  };
  const result = await Order.create(order);
  return result;
};


const retrieveAllOrdersForASpecificUser = async (userId: string) => {
  const result = await Order.find({userId: userId})
  return result;
};

export const OrdersServices = {
  createOrders,
  retrieveAllOrdersForASpecificUser,
};
