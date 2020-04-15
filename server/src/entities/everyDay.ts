import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { BaseFunc } from "./baseFunc";



export class EveryDay extends BaseFunc {

    @IsNotEmpty({ message: "每日不能为空" })
    @Type(() => String)
    public content!: string;

    @Type(() => Number)
    public ctime!: number;



    public static tranform(plainObj: object): EveryDay {
        return super.baseTranform(EveryDay, plainObj)
    }



}