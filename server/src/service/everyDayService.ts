import { EveryDayDB } from "../db/db";
import { EveryDay } from "../entities/everyDay";
import { getTime } from "../utils/getTime";
import { IEveryDay } from "../utils/commonType";


export class EveryDayService {

    // 添加每日一句
    public static async add(everyDay: EveryDay): Promise<string[] | null> {
        everyDay.ctime = getTime()



        // 转换EveryDay类型
        everyDay = EveryDay.tranform(everyDay)

        // 验证信息完整
        const errors = await everyDay.validataThis()
        if (errors.length > 0) {
            return errors
        }
        // 添加每日一句

        const res = await EveryDayDB.insertEveryDay(everyDay)
        // res 为空 表示添加成功
        return res

    }
    public static async descFind(): Promise<IEveryDay[]> {

        return await EveryDayDB.searchEveryDay()
    }
}
