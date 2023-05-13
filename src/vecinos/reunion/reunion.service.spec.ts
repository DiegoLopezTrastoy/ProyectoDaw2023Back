import { Test, TestingModule } from '@nestjs/testing';
import { ReunionService } from './reunion.service';

describe('ReunionService', () => {
  let service: ReunionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReunionService],
    }).compile();

    service = module.get<ReunionService>(ReunionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
