import { sqlQuery } from "./db"
import { Blog } from "../entities/blog"
import { insertTagBlogMapping, ITagBlogMapping } from "./tagBlogMapping"
import { insertTags, findTags } from "./tagsDB"
import { getTime } from "../utils/getTime"
import { ISearchByPage } from "../utils/commonType"

// 添加博客 同时添加tag 和 tag blog 映射表
export async function insertBlog(obj: Blog): Promise<any> {
    let { title, content, tags, views, ctime, utime } = obj
    tags = tags.replace(/ /g, "").replace("，", ",")
    const sql = 'insert into blog(`title`,`content`,`tags`,`views`,`ctime`,`utime`) values (?,?,?,?,?,?)'
    const params = [title, content, tags, views, ctime, utime]

    try {
        const result: any = await sqlQuery(sql, params)
        if (!result.message) {
            //  获得博客id
            const blog_id = result.insertId
            // 字符串标签按，分割成数据遍历

            tags.split(",").forEach(async (ele) => {
                console.log(ele)

                //查看标签表中是否有数据
                const findTagsResult = await findTags(ele)
                //没有便签 则先创建一个新标签 在根据返回的创建标签ID 和上面的博客ID 创建映射表
                if (!findTagsResult[0]) {
                    const obj1: any = {
                        tag: ele,
                        utime: getTime(),
                        ctime: getTime(),
                    }
                    const res = await insertTags(obj1)
                    const tag_id = res.insertId

                    const obj2: ITagBlogMapping = {
                        tag_id: tag_id,
                        blog_id: blog_id,
                        utime: getTime(),
                        ctime: getTime(),
                    }
                    await insertTagBlogMapping(obj2)
                } else {
                    //有便签 则直接根据查询之后的标签ID 和上面的博客ID 创建映射表
                    const obj3: ITagBlogMapping = {
                        tag_id: findTagsResult[0].id,
                        blog_id: blog_id,
                        utime: getTime(),
                        ctime: getTime(),
                    }
                    await insertTagBlogMapping(obj3)
                }

            });
            return ""
        }

    } catch (error) {
        console.log(error)
    }
}
// 按id删除博客
export async function deleteBlog(id: string) {
    var sql = "delete from blog where id = ?;";
    var params = [id];
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }
}

//按照查询条件查询博客
export async function searchBlogByPage(obj: ISearchByPage): Promise<any> {

    let { page, pageSize } = obj

    page = +page;
    pageSize = +pageSize
    const sql = 'select * from blog order by id desc limit ?,?'
    const params = [(page - 1) * pageSize, pageSize]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}

// 按照博客id查询博客
export async function searchBlogById(id: string): Promise<any> {

    const sql = 'select * from blog where id=?'
    const params = [id]
    try {
        const result = await sqlQuery(sql, params)
        return result
    } catch (error) {
        console.log(error)
    }

}
// 获得博客总数
export async function searchBlogCount() {
    const sql = 'select count(1) as count from blog'
    try {
        const result: any = await sqlQuery(sql)

        return result


    } catch (error) {
        console.log(error)
    }
}
//增加浏览次数
export async function addViews(id: string) {
    var sql = "update blog set views = views + 1 where id = ?;";
    var params = [id];
    try {
        const result: any = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
// 得到热门博客
export async function searchHotBlog(size: number) {
    var sql = "select * from blog order by views desc limit ?;";
    var params = [size];

    try {
        const result: any = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}
// title content  模糊查询
export async function searchBlogBySearch(search: string) {
    var sql = "select * from blog where title like concat(concat('%', ?), '%') or content like concat(concat('%', ?), '%');";
    var params = [search, search];
    try {
        const result: any = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}

// 得到模糊查询总数
export async function searchBlogBySearchCount(search: string) {
    var sql = "select count(1) as count from blog where title like \"%?%\" or content like \"%?%\";";
    var params = [search, search];
    try {
        const result: any = await sqlQuery(sql, params)

        return result


    } catch (error) {
        console.log(error)
    }
}

export default {
    insertBlog, searchBlogByPage, addViews, searchHotBlog, searchBlogById, searchBlogCount, searchBlogBySearchCount, searchBlogBySearch
}