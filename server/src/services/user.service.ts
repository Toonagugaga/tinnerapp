import mongoose, { Promise, RootFilterQuery } from "mongoose"
import { updateProfile, user, userPagination } from "../types/user.type"
import { IUserDocument } from "../Interfaces/user.interface"
import { QueryHelper } from "../helper/query.helper"

export const UserService = {
    get: function (pagination: userPagination, user_id: string): Promise<userPagination> {
        let filter: RootFilterQuery<IUserDocument> = {
            _id: { $nin: new mongoose.Types.ObjectId(user_id) },
            $and: QueryHelper.parseUserQuery(pagination)
        }
        throw new Error('NOT IMPLEMENT')
    },
    getByUserName: function (username: string): Promise<user> {
        throw new Error('NOT IMPLEMENT')
    },
    updateProfile: function (newProfile: updateProfile, user_id: string): Promise<user> {
        throw new Error('NOT IMPLEMENT')
    }
}