import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OpenHouseService } from 'src/open-house/open-house.service';
import { CreateEnrollHouseDto } from './dto/create-enroll-house.dto';
import {
  EnrollHouse,
  EnrollHouseDocument,
} from './schemas/enroll-house.schema';

@Injectable()
export class EnrollHouseService {
  constructor(
    @InjectModel(EnrollHouse.name)
    private readonly enrollHouseModel: Model<EnrollHouseDocument>,
    @Inject(OpenHouseService)
    private readonly openHouseService: OpenHouseService,
  ) {}
  async create(createEnrollHouseDto: CreateEnrollHouseDto) {
    const data = new this.enrollHouseModel(createEnrollHouseDto);
    const enrolledUserData = await data.save();
    console.log(enrolledUserData)
    this.openHouseService.updateVisiterAmount(
      enrolledUserData.openHouse.toString(),
      true,
    );
    return enrolledUserData;
  }

  async update(id: string) {
    const data = await this.enrollHouseModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          isEnroll: false,
        },
      },
      { new: true },
    );
    if (data) {
      this.openHouseService.updateVisiterAmount(
        data.openHouse.toString(),
        false,
      );
    } 
    return data;
  }
}
