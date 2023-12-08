import { Request, Response } from "express";
import { OrdersServices } from "./orders.service";

const createOrders = async (req: Request, res: Response) => {
  try {
    const { orderData } = req.body;
    const { userId } = req.params;
    const result = await OrdersServices.createOrders(orderData, userId);
    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "failed",
      data: err,
    });
  }
};

export const OrdersControllers = {
  createOrders,
};
