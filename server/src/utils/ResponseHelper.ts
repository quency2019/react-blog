import { Response } from "express";
import { ISearchResult } from "./commonType";


export class ResponseHelper {
    /**
     * 响应错误
     */
    public static sendError(error: string | string[], res: Response) {
        let err: string;
        if (Array.isArray(error)) {
            err = error.join(";")
        } else {
            err = error
        }
        res.send({
            err,
            data: []
        })
    }
    /**
     * 响应一个普通数据
     */
    public static sendData(data: any, res: Response) {
        res.send({
            err: "",
            data
        })

    }

    /**
     * 响应一个分页数据
     */
    public static sendPageData<T>(data: ISearchResult<T>, res: Response) {

        res.send({
            err: "",
            data: data.data,
            total: data.count
        })



    }

    public static sendAllData<T>(data: T[], res: Response) {

        res.send({
            err: "",
            data: data,

        })



    }

}