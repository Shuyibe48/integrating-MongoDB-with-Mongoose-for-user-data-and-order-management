import express from 'express'
import { UserControllers } from './user.controller'
const router = express.Router()

router.post('/create-user', UserControllers.createUser)
// router.get('/')
// router.put('/user')
// router.delete('/user')

export const UserRoutes = router