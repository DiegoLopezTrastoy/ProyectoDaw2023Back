import { Test, TestingModule } from '@nestjs/testing';
import { SecretarioService } from './secretario.service';

describe('SecretarioService', () => {
  let service: SecretarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecretarioService],
    }).compile();

    service = module.get<SecretarioService>(SecretarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
