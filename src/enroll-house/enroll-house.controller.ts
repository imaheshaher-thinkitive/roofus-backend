import { Controller, Post, Body, Patch } from '@nestjs/common';
import { EnrollHouseService } from './enroll-house.service';
import { CreateEnrollHouseDto } from './dto/create-enroll-house.dto';
import { UpdateEnrollHouseDto } from './dto/update-enroll-house.dto';

@Controller('enroll-house')
export class EnrollHouseController {
  constructor(private readonly enrollHouseService: EnrollHouseService) {}

  @Post('/enroll')
  enrollUserHouse(@Body() createEnrollHouseDto: CreateEnrollHouseDto) {
    return this.enrollHouseService.create(createEnrollHouseDto);
  }

  @Post('/unroll')
  unEnrollUserHouse(@Body() updateUnenrollUserDto: UpdateEnrollHouseDto ) {
    return this.enrollHouseService.update(updateUnenrollUserDto.id)
  }
}
