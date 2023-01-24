import { IsNumber, IsString } from 'class-validator';

export class UpdateOpenHouseDto {
  @IsNumber()
  visitorAmount: number;

  @IsString()
  startDate: string;

}
