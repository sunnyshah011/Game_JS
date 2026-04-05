import express from 'express'
import { Loginpage, Registerpage, Dashboardpage } from '../controller/user.controller'

const userRouter = express.Router()

userRouter.post('/login', Loginpage)
userRouter.post('/register', Registerpage)
userRouter.get('/dashboard', Dashboardpage)

export default userRouter
