import {  IsNumber, IsString } from 'class-validator';

export class CreateOpenHouseDto {
  @IsNumber()
  visitorAmount: number;

  @IsString()
  startDate: string;
}
