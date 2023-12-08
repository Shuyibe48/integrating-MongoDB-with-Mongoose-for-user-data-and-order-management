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

export const OrdersServices = {
  createOrders,
};
