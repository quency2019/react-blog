import express from 'express'
import { ResponseHelper } from '../utils/ResponseHelper'
import { BlogService } from '../service/blogService'
const router = express.Router()

// 按页查询博客
router.get('/', async (req, res) => {
    const result = await BlogService.FindByCondition(req.query)
    ResponseHelper.sendPageData(result, res)

})
// 添加博客
router.post('/', async (req, res) => {

    const result = await BlogService.add(req.body)
    if (!result) {
        ResponseHelper.sendData(result, res)
    }


})
// 按ID查询博客

router.get('/:id', async (req, res) => {
    const result = await BlogService.FindById(req.params.id)
    ResponseHelper.sendData(result, res)

})
// 添加浏览次数
router.put('/:id', async (req, res) => {
    const result = await BlogService.addViews(req.params.id)
    ResponseHelper.sendData(result, res)

})
// 得到热门博客博客
router.get('/hot/', async (req, res) => {
    console.log(req.query)
    const result = await BlogService.FindHot(req.query)
    ResponseHelper.sendAllData(result, res)

})

export default router