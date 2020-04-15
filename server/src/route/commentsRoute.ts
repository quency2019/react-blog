import express from 'express'
import { ResponseHelper } from '../utils/ResponseHelper'
import { CommentsService } from '../service/commentsService'
const router = express.Router()

// 按博客id 查询评论
router.get('/', async (req, res) => {
    const result = await CommentsService.FindByBlogId(req.params.id)
    ResponseHelper.sendPageData(result, res)

})
// 添加评论
router.post('/', async (req, res) => {

    const result = await CommentsService.add(req.body)
    if (!result) {
        ResponseHelper.sendData(result, res)
    }


})

// 得到size 条最新评论
router.get('/new', async (req, res) => {
    console.log(req.query)
    const result = await CommentsService.FindBySize(req.query)
    ResponseHelper.sendAllData(result, res)

})

export default router