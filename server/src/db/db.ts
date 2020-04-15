import mysql, { MysqlError } from 'mysql'
import EveryDayDB from './everyDayDB'
import BlogDB from './blogDB'
import CommentsDB from './commentsDB'
import TagBlogMappingDB from './tagBlogMapping'
import TagsDB from './tagsDB'

export const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_blog',
    port: 3306
})

export const sqlQuery = (sql: string, values?: any) => {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        connection.connect()
        try {
            connection.query(sql, values, function (err: MysqlError | null, result: any) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)

                }
            });

        } catch (error) {
            console.log(error)
        }
        connection.end()
    })

}

export {
    EveryDayDB,
    BlogDB,
    CommentsDB,
    TagBlogMappingDB,
    TagsDB
}


