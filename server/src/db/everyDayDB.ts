import { sqlQuery } from "./db";
import { EveryDay } from "../entities/everyDay";


// 添加每日一句
export async function insertEveryDay(obj: EveryDay): Promise<any> {
    const { content, ctime } = obj
    const sql = 'insert into every_day(`content`,`ctime`) values (?,?)'
    const params = [content, ctime]

    try {
        const result: any = await sqlQuery(sql, params)
        if (!result.message) {
            return ""
        }

    } catch (error) {
        console.log(error)
    }
}
// 获得倒序全部
export async function searchEveryDay(): Promise<any> {
    const sql = 'select * from every_day order by ctime desc'
    try {
        const result = await sqlQuery(sql)
        return result
    } catch (error) {
        console.log(error)
    }

}


export default {
    insertEveryDay, searchEveryDay

}

