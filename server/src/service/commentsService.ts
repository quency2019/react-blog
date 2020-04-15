
import { getTime } from "../utils/getTime";

import { ISearchResult, ISearchByPage, IComments } from "../utils/commonType";
import { Comments } from "../entities/comments";
import { CommentsDB } from "../db/db";



export class CommentsService {

    // 添加评论
    public static async add(comments: Comments): Promise<string[] | null> {
        comments.ctime = getTime()
        comments.utime = getTime()


        // 转换评论类型
        comments = Comments.tranform(comments)

        // 验证信息完整
        const errors = await comments.validataThis()
        if (errors.length > 0) {
            return errors
        }
        // 添加评论

        const res = await CommentsDB.insertComments(comments)
        console.log(res)
        // res 为空 表示添加成功
        return res

    }
    // 按博客id查询评论
    public static async FindByBlogId(id: string): Promise<ISearchResult<IComments>> {
        const data = await CommentsDB.searchCommentsByBlogId(id)
        let count = await CommentsDB.searchCommentsCountByBlogId(id)
        count = count[0].count
        return {
            data,
            count,
        }
    }

    //倒叙按size条件 查询 得到最新的size 条评论
    public static async FindBySize(obj: any): Promise<IComments[]> {
        const { size } = obj
        const data = await CommentsDB.searchNewComments(size)

        return data
    }


}

