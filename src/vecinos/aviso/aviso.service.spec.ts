import { Test, TestingModule } from '@nestjs/testing';
import { AvisoService } from './aviso.service';

describe('AvisoService', () => {
  let service: AvisoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvisoService],
    }).compile();

    service = module.get<AvisoService>(AvisoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
