import 'reflect-metadata'
import express from 'express'
import everyDayRoute from './route/everyDayRoute'
import blogRoute from './route/blogRoute'
import commentsRoute from './route/commentsRoute'

const app = express();

// 配置中间件，解析请求体中的json格式
app.use(express.json())

app.use("/api/everyDay", everyDayRoute)
app.use("/api/blog", blogRoute)
app.use("/api/comments", commentsRoute)


app.listen(3000)