import { Test, TestingModule } from '@nestjs/testing';
import { OpcionService } from './opcion.service';

describe('OpcionService', () => {
  let service: OpcionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcionService],
    }).compile();

    service = module.get<OpcionService>(OpcionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
