import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property, PropertyDocument } from './schemas/property.schema';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name)
    private readonly propertyModel: Model<PropertyDocument>,
  ) { }
  async create(createPropertyDto: CreatePropertyDto) {
    const propertyData = new this.propertyModel(createPropertyDto);
    return await propertyData.save();
  }

  async findAll() {
    return await this.propertyModel.find();
  }

  async findOne(id: string) {
    return await this.propertyModel.findById({ _id: id });
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    return await this.propertyModel.updateOne(
      { _id: id },
      {
        $set: updatePropertyDto,
      },
      {
        new: true,
      },
    );
  }

  async remove(id: string) {
    return await this.propertyModel.remove({ _id: id })
  }
}
