import express from 'express'
import connection from './DB/connectionDB.js'
import userRouter from './src/modules/users/user.routes.js'
import postRouter from './src/modules/posts/post.routes.js'
import commentRouter from './src/modules/comments/comment.routes.js'
import bcrypt from "bcrypt"

const app = express()
const port = process.env.port || 3000
app.use(express.json())
connection()

app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/comment",commentRouter)


app.use('*', (req, res) => res.status(404).json({msg:"404 page not found"}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))