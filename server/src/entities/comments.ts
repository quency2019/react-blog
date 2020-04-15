import { IsNotEmpty, ArrayMinSize, IsArray } from "class-validator";
import { Type } from "class-transformer";
import { BaseFunc } from "./baseFunc";



export class Comments extends BaseFunc {
    @IsNotEmpty({ message: "博客Id不能为空" })
    @Type(() => String)
    public blog_id!: string;

    @IsNotEmpty({ message: "昵称不能为空" })
    @Type(() => String)
    public user_name!: string;


    @IsNotEmpty({ message: "博客评论内容不能为空" })
    @Type(() => String)
    public comments!: string;

    @IsNotEmpty({ message: "博客评论邮箱不能为空" })
    @Type(() => String)
    public email!: string;

    @IsNotEmpty({ message: "博客评论是否有父级不能为空,-1为没有父级，1为有父1级,2为有父2级,等等" })
    @Type(() => Number)
    public parent!: number;

    @IsNotEmpty({ message: "博客评论父级名称不能为空" })
    @Type(() => String)
    public parent_name!: string;



    @Type(() => Number)
    public ctime!: number;

    @Type(() => Number)
    public utime?: number;

    public static tranform(plainObj: object): Comments {
        return super.baseTranform(Comments, plainObj)
    }



}