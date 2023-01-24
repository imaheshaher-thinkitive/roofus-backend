import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  town: string;

  @IsNumber()
  @IsOptional()
  pinCode: number;
}
export class UpdatePropertyDto {
  @ValidateNested()
  @Type(() => UpdateAddressDto)
  address: UpdateAddressDto;
}
