import { User } from "../user.models"
import { TUser } from "./user.interfae"

const createUserInToDb = async (userData: TUser) => {
    const result = await User.create(userData)

    return result
}

const getUsersFromDB = async () => {
    const result = await User.find({}, {username: 1, fullName: 1, age: 1, email: 1, address: 1})
    // const result = await User.aggregate{{
    //     {}
    // }}
    return result
}

export const UsersServices = {
    createUserInToDb,
    getUsersFromDB,
}