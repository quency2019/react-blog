import express from 'express'
import { EveryDayService } from '../service/everyDayService'
import { ResponseHelper } from '../utils/ResponseHelper'
import { IEveryDay } from '../utils/commonType'
const router = express.Router()
router.get('/', async (req, res) => {
    const result = await EveryDayService.descFind()
    ResponseHelper.sendAllData<IEveryDay>(result, res)

})
router.post('/', async (req, res) => {

    const result = await EveryDayService.add(req.body)
    if (!result) {
        ResponseHelper.sendData(result, res)
    }


})


export default router