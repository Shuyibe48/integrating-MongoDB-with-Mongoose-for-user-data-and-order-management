// import { Model } from "mongoose";

export type TOrder = {
  userId: number,
  productName: string;
  price: number;
  quantity: number;
};


// export interface OrderModel extends Model<TOrder> {
//   isOrderExists(userId: string): Promise<TOrder | null>;
// }