import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  town: string;

  @IsNumber()
  @IsNotEmpty()
  pinCode: number;
}
export class CreatePropertyDto {
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  address: AddressDto;
}

