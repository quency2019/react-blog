import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { BaseFunc } from "./baseFunc";



export class Tags extends BaseFunc {

    @IsNotEmpty({ message: "标签为空" })
    @Type(() => String)
    public tag!: string;



    @Type(() => Number)
    public ctime!: number;

    @Type(() => Number)
    public utime?: number;

    public static tranform(plainObj: object): Tags {
        return super.baseTranform(Tags, plainObj)
    }



}