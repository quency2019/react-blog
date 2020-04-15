import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { BaseFunc } from "./baseFunc";



export class Blog extends BaseFunc {

    @IsNotEmpty({ message: "文章标题不能为空" })
    @Type(() => String)
    public title!: string;

    @IsNotEmpty({ message: "文章内容不能为空" })
    @Type(() => String)
    public content!: string;

    @IsNotEmpty({ message: "文章浏览次数不能为空" })
    @Type(() => Number)
    public views!: number;


    @IsNotEmpty({ message: "文章标签不能为空" })
    @Type(() => String)
    public tags!: string;

    @Type(() => Number)
    public ctime!: number;

    @Type(() => Number)
    public utime?: number;

    public static tranform(plainObj: object): Blog {
        return super.baseTranform(Blog, plainObj)
    }



}