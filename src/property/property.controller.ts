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
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Response } from 'express';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) { }

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const data = await this.propertyService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'Properties listed successfully',
      data,
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
    @Res() res: Response
  ) {
    const updateData = await this.propertyService.update(id, updatePropertyDto);
    if (!updateData.matchedCount) {
      return res.status(HttpStatus.NO_CONTENT).json({
        message: 'Property not found'
      })
    } else {
      return res.status(HttpStatus.OK).json({
        message: 'Updated'
      })
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(id);
  }
}
