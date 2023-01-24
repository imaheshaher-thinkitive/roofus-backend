import { Test, TestingModule } from '@nestjs/testing';
import { EnrollHouseController } from './enroll-house.controller';
import { EnrollHouseService } from './enroll-house.service';

describe('EnrollHouseController', () => {
  let controller: EnrollHouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollHouseController],
      providers: [EnrollHouseService],
    }).compile();

    controller = module.get<EnrollHouseController>(EnrollHouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
