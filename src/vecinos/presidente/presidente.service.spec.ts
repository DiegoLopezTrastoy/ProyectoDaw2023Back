import { Test, TestingModule } from '@nestjs/testing';
import { PresidenteService } from './presidente.service';

describe('PresidenteService', () => {
  let service: PresidenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresidenteService],
    }).compile();

    service = module.get<PresidenteService>(PresidenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
