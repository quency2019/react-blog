import { sqlQuery } from "./db"

export interface ITagBlogMapping {
    tag_id: string, blog_id: string, ctime: number, utime: number
}
// 添加博客和标签映射
export async function insertTagBlogMapping(obj: ITagBlogMapping): Promise<any> {

    const { tag_id, blog_id, ctime, utime } = obj
    const sql = 'insert into tag_blog_mapping(`tag_id`,`blog_id`,`ctime`,`utime`) values (?,?,?,?)'
    const params = [tag_id, blog_id, ctime, utime]

    try {
        const result: any = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}
// 按标签查询 该标签下的博客数目
export async function searchByTagCount(tabId: string) {
    const sql = 'select count(1) as count from  tag_blog_mapping where tab_id=? '
    const params = [tabId]
    try {
        const result: any = await sqlQuery(sql, params)
        if (!result.message) {
            return result
        }

    } catch (error) {
        console.log(error)
    }
}

export default {
    insertTagBlogMapping,
    searchByTagCount
}