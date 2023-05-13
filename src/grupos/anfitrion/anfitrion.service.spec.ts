import { Test, TestingModule } from '@nestjs/testing';
import { AnfitrionService } from './anfitrion.service';

describe('AnfitrionService', () => {
  let service: AnfitrionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnfitrionService],
    }).compile();

    service = module.get<AnfitrionService>(AnfitrionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
