import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PropertyModule } from './property/property.module';
import { OpenHouseModule } from './open-house/open-house.module';
import { EnrollHouseModule } from './enroll-house/enroll-house.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/roofus'),
    UsersModule,
    PropertyModule,
    OpenHouseModule,
    EnrollHouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
