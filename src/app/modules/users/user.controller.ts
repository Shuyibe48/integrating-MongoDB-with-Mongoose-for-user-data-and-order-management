import { Request, Response } from "express";
import { UsersServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UsersServices.createUserInToDb(userData);

    res.status(200).json({
      success: true,
      message: "Student created successfully!",
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

export const UserControllers = {
  createUser,
};
