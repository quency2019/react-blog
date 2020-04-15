import { Tags } from "../entities/tags"
import { sqlQuery } from "./db"

// 添加标签
export async function insertTags(obj: Tags): Promise<any> {
    const { tag, ctime, utime } = obj
    const sql = 'insert into tags(`tag`,`ctime`,`utime`) values (?,?,?)'
    const params = [tag, ctime, utime]

    try {
        console.log(params, "insert")
        const result: any = await sqlQuery(sql, params)
        console.log(result)

        return result


    } catch (error) {
        console.log(error)
    }
}

// 搜索标签
export async function findTags(tagName: string): Promise<any> {

    const sql = 'select * from tags where tag=?'
    const params = [tagName]

    try {
        const result: any = await sqlQuery(sql, params)



        return result



    } catch (error) {
        console.log(error)
    }
}

export default {
    findTags,
    insertTags
}

