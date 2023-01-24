import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OpenHouseService } from './open-house.service';
import { OpenHouseController } from './open-house.controller';
import { OpenHouse, OpenHouseSchema } from './schemas/open-house.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OpenHouse.name,
        schema: OpenHouseSchema,
      },
    ]),
  ],
  controllers: [OpenHouseController],
  providers: [OpenHouseService],
  exports: [OpenHouseService]
})
export class OpenHouseModule {}
