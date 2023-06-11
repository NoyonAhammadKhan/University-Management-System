import { Request, Response } from 'express'
import config from '../../../config'
import { User } from './user.model'
import { IUser } from './users.interface'
import { generateUserId } from './users.utils'

const DEFAULT_STUDENT_PASSWORD = config.default_user_pass as string

const createUser = async (user: IUser): Promise<IUser> => {
  const id = await generateUserId()
  user.id = id
  if (!user.password) {
    user.password = DEFAULT_STUDENT_PASSWORD
  }
  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
