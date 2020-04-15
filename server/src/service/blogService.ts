
import { getTime } from "../utils/getTime";
import { Blog } from "../entities/blog";
import { BlogDB } from "../db/db";
import { IBlog, ISearchResult, ISearchByPage } from "../utils/commonType";
import blogDB from "../db/blogDB";


export class BlogService {

    // 添加每日一句
    public static async add(blog: Blog): Promise<string[] | null> {
        blog.ctime = getTime()
        blog.utime = getTime()


        // 转换EveryDay类型
        blog = Blog.tranform(blog)

        // 验证信息完整
        const errors = await blog.validataThis()
        if (errors.length > 0) {
            return errors
        }
        // 添加每日一句

        const res = await BlogDB.insertBlog(blog)
        // res 为空 表示添加成功
        return res

    }
    // 按id查询博客
    public static async FindById(id: string): Promise<IBlog | ''> {

        return await BlogDB.searchBlogById(id)
    }
    // 按id增加博客浏览次数
    public static async addViews(id: string): Promise<''> {
        await BlogDB.addViews(id)
        return ""
    }
    //按页条件 查询
    public static async FindByCondition(condition: ISearchByPage): Promise<ISearchResult<IBlog>> {

        const data = await BlogDB.searchBlogByPage(condition)
        let count = await blogDB.searchBlogCount()

        count = count[0].count

        return {
            data,
            count,
        }
    }

    // 得到热门博客
    public static async FindHot(obj: any): Promise<IBlog[]> {

        const { size } = obj
        return await BlogDB.searchHotBlog(size)
    }
}

