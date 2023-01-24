import { IsString } from "class-validator";

export class UpdateEnrollHouseDto {
    @IsString()
    id: string;
}