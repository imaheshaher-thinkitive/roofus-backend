import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PropertyDocument = Property & Document;

export class Address {
  @Prop({ isRequired: true })
  city: string;
  @Prop({ isRequired: true })
  town: string;
  @Prop({ isRequired: true })
  pinCode: number;
}
@Schema({ timestamps: true })
export class Property {
  @Prop()
  address: Address;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
