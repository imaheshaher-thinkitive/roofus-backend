import { Test, TestingModule } from '@nestjs/testing';
import { EnrollHouseService } from './enroll-house.service';

describe('EnrollHouseService', () => {
  let service: EnrollHouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollHouseService],
    }).compile();

    service = module.get<EnrollHouseService>(EnrollHouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
