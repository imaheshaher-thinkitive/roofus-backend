import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEnrollHouseDto {
  @IsString()
  @IsNotEmpty()
  user: string;

  @IsString()
  @IsNotEmpty()
  openHouse: string;
}
