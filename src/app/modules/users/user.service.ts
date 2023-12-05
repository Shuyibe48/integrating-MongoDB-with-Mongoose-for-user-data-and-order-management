import { User } from "../user.models"
import { TUser } from "./user.interfae"

const createUserInToDb = async (userData: TUser) => {
    const result = await User.create(userData)

    return result
}


export const UsersServices = {
    createUserInToDb,
}