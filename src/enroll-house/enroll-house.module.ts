import { OpenHouseModule } from './../open-house/open-house.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EnrollHouseService } from './enroll-house.service';
import { EnrollHouseController } from './enroll-house.controller';
import { EnrollHouse, EnrollHouseSchema } from './schemas/enroll-house.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EnrollHouse.name,
        schema: EnrollHouseSchema,
      },
  ]),
    OpenHouseModule
  ],
  controllers: [EnrollHouseController],
  providers: [EnrollHouseService],
})
export class EnrollHouseModule {}
