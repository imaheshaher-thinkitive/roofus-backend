import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { Property, PropertySchema } from './schemas/property.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Property.name,
        schema: PropertySchema,
      },
    ])
  ],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule { }
