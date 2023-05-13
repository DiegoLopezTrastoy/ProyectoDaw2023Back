import { Test, TestingModule } from '@nestjs/testing';
import { VotacionService } from './votacion.service';

describe('VotacionService', () => {
  let service: VotacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotacionService],
    }).compile();

    service = module.get<VotacionService>(VotacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
