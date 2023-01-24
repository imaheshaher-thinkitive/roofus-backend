import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { OpenHouseService } from './open-house.service';
import { CreateOpenHouseDto } from './dto/create-open-house.dto';
import { UpdateOpenHouseDto } from './dto/update-open-house.dto';
import { Response } from 'express';

@Controller('open-house')
export class OpenHouseController {
  constructor(private readonly openHouseService: OpenHouseService) {}

  @Post()
  create(@Body() createOpenHouseDto: CreateOpenHouseDto) {
    return this.openHouseService.create(createOpenHouseDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const data = await this.openHouseService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'Open house listed successfully',
      data,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openHouseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOpenHouseDto: UpdateOpenHouseDto,
  ) {
    return this.openHouseService.update(id, updateOpenHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openHouseService.remove(id);
  }

}
