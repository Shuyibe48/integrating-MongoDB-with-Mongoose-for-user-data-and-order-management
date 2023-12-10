import { User } from "../user.models";
import { TUser } from "./user.interfae";

const createUserInToDb = async (userData: TUser) => {
  const result = await User.create(userData);

  return result;
};

const getUsersFromDB = async () => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 }
  );
  // const result = await User.aggregate{{
  //     {}
  // }}
  return result;
};

const getUserById = async (userId: string) => {
  const result = await User.isUserExists(userId);
  return result;
};

const updateUserById = async (userId: string, updateData: TUser) => {
  const result = await User.updateUser(userId, updateData);
  return result;
};

const deleteUser = async (userId: string) => {
  const result = await User.deleteUser(userId);
  return result;
};

export const UsersServices = {
  createUserInToDb,
  getUsersFromDB,
  getUserById,
  updateUserById,
  deleteUser,
};
