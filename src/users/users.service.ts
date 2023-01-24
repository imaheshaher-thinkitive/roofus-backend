import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async findAll() {
    const userData = await this.userModel.find();
    return userData;
  }

  async findOne(id: string) {
    return await this.userModel.findById({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: id },
      {
        $set: updateUserDto,
      },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.userModel.remove({ _id: id });
  }
}
