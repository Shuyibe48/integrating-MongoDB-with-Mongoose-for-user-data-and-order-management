import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router();

router.get("/", UserControllers.getUsers);
router.get("/:userId", UserControllers.getUserById);
router.post("/create-user", UserControllers.createUser);
router.put("/:userId", UserControllers.updateUserById);
router.put("/:userId/orders", UserControllers.createOrder);
router.get("/:userId/orders", UserControllers.getOrderById);
router.delete("/:userId", UserControllers.deleteUser);

export const UserRoutes = router;
