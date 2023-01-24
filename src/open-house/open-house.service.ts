import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOpenHouseDto } from './dto/create-open-house.dto';
import { UpdateOpenHouseDto } from './dto/update-open-house.dto';
import { OpenHouse, OpenHouseDocument } from './schemas/open-house.schema';

@Injectable()
export class OpenHouseService {
  constructor(
    @InjectModel(OpenHouse.name)
    private readonly openHouse: Model<OpenHouseDocument>,
  ) { }
  async create(createOpenHouseDto: CreateOpenHouseDto) {
    const openHouseData = new this.openHouse(createOpenHouseDto);
    return await openHouseData.save();
  }

  async findAll() {
    return await this.openHouse.find().populate('property');
  }

  async findOne(id: string, populatedField?: string) {
    return await this.openHouse.findById({ _id: id }).populate(populatedField);
  }

  async update(id: string, updateOpenHouseDto: UpdateOpenHouseDto) {
    return await this.openHouse.updateOne(
      { _id: id },
      {
        $set: updateOpenHouseDto,
      },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.openHouse.remove({ _id: id });
  }

  async updateVisiterAmount(houseId: string, isVisiterAdded: boolean) {
    const houseDetail = await this.findOne(houseId);
      if (houseDetail) {
      let count;
      if (isVisiterAdded) {
        if (houseDetail.currentCount + 1 > houseDetail.visitorAmount) {
          throw Error('Visitor amount is fullfilled');
        }
        count = houseDetail.currentCount + 1;
      } else {
        count = houseDetail.currentCount - 1;
      }
      const updateData = await this.openHouse.updateOne(
        {
          _id: houseId,
        },
        {
          $set: {
            currentCount: count,
          },
        },
        { new: true }
      );
      return updateData;
    }
  }
}
