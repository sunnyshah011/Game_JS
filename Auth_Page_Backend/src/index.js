import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configuration/dbConfig.js'
import userRouter from './route/user.route.js'
dotenv.config()

const App = express()
const port = process.env.PORT || 8000

//db connection
connectDB()

App.use("user-auth", userRouter)

//server
App.listen(port, () => {
    console.log(`app is running at http://locashost:${port}`)
})