import { sqlQuery } from "./db"
import { Comments } from "../entities/comments"

// 添加评论信息
export async function insertComments(obj: Comments): Promise<any> {
    const { blog_id, parent, parent_name, user_name, comments, email, ctime, utime } = obj
    const sql = 'insert into comments(`blog_id`,`parent`,`parent_name`,`user_name`,`comments`,`email`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?)'
    const params = [blog_id, parent, parent_name, user_name, comments, email, ctime, utime]

    try {
        const result: any = await sqlQuery(sql, params)
        return result

    } catch (error) {
        console.log(error)
    }
}


//倒序得到 size条评论信息
export async function searchComments(size: number): Promise<any> {


    const sql = 'select * from comments order by ctime desc limit ?'
    const params = [size]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
//通过博客id  获取到评论信息
export async function searchCommentsByBlogId(blogId: string): Promise<any> {


    const sql = 'select * from comments where blog_id = ?'
    const params = [blogId]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
//通过博客id  获取到评论总数
export async function searchCommentsCountByBlogId(blogId: string): Promise<any> {


    const sql = 'select count(1) as count from comments where blog_id = ?'
    const params = [blogId]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
//得到所有的评论总数
export async function CommentsCount(): Promise<any> {

    const sql = 'select count(1) as count from comments'

    try {
        const result = await sqlQuery(sql)
        return result
    } catch (error) {
        console.log(error)
    }

}

export async function searchNewComments(size: number): Promise<any> {
    var sql = "select * from comments order by id desc limit ?;";
    var params = [size];
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }
}

export default {
    insertComments,
    CommentsCount,
    searchComments,
    searchCommentsByBlogId,
    searchNewComments,
    searchCommentsCountByBlogId

}