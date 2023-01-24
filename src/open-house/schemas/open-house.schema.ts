import { Property } from './../../property/schemas/property.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type OpenHouseDocument = OpenHouse & Document;
@Schema({ timestamps: true })
export class OpenHouse {
  @Prop()
  visitorAmount: number;

  @Prop({ ref: 'Property', type: mongoose.Types.ObjectId })
  property: Property;

  @Prop()
  startDate: Date;

  @Prop({ default: 0 })
  currentCount: number;
}

export const OpenHouseSchema = SchemaFactory.createForClass(OpenHouse);
