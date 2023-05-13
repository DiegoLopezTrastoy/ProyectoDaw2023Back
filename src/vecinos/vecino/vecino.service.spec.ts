import { Test, TestingModule } from '@nestjs/testing';
import { VecinoService } from './vecino.service';

describe('VecinoService', () => {
  let service: VecinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VecinoService],
    }).compile();

    service = module.get<VecinoService>(VecinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
