import { Test, TestingModule } from '@nestjs/testing';
import { TemaService } from './tema.service';

describe('TemaService', () => {
  let service: TemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemaService],
    }).compile();

    service = module.get<TemaService>(TemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
