import express from 'express'
import { UserControllers } from './user.controller'
const router = express.Router()

router.get('/users' , UserControllers.getUsers)
router.post('/create-user', UserControllers.createUser)
// router.put('/user')
// router.delete('/user')

export const UserRoutes = router