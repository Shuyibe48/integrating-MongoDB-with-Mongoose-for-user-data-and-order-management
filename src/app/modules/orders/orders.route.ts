import express from 'express'
import { OrdersControllers } from './orders.controller'
const router = express.Router()

router.put('/:userId/orders', OrdersControllers.createOrders)
router.get('/:userId/orders', OrdersControllers.createOrders)

export const OrderRoutes = router