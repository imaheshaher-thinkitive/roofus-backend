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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.create(createUserDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'User created successfully',
      data,
    });
  }

  @Get()
  async findAll(@Res() res: Response) {
    const data = await this.usersService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'User listed successfully',
      data,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
