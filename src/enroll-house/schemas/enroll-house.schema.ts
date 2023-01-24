import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { OpenHouse } from '../../open-house/schemas/open-house.schema';

export type EnrollHouseDocument = EnrollHouse & Document;

@Schema({ timestamps: true })
export class EnrollHouse {
  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'OpenHouse',
  })
  openHouse: OpenHouse;
  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'User'
  })
  user: User;

  @Prop({
    default: true,
  })
  isEnroll: boolean;

}

export const EnrollHouseSchema = SchemaFactory.createForClass(EnrollHouse);
