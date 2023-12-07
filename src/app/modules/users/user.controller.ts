import { Request, Response } from "express";
import { UsersServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UsersServices.createUserInToDb(userData);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UsersServices.getUsersFromDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UsersServices.getUserById(userId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "User fetched successfully!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No user found!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UsersServices.deleteUser(userId);

    if (result.modifiedCount === 1) {
      res.status(200).json({
        success: true,
        message: "User deleted successfully!",
        data: null,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No user found!",
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong!",
      data: err,
    });
  }
};

export const UserControllers = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
