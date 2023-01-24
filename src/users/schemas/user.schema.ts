import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Roles {
  USER = 'USER', //or User = "user",
  Admin = 'ADMIN', // or Admin = "admin",
}
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop({ enum: Roles, default: Roles.USER })
  userType: Roles;
}

export const UserSchema = SchemaFactory.createForClass(User);
