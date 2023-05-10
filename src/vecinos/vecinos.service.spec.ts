import { Test, TestingModule } from '@nestjs/testing';
import { VecinosService } from './vecinos.service';

describe('VecinosService', () => {
  let service: VecinosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VecinosService],
    }).compile();

    service = module.get<VecinosService>(VecinosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
