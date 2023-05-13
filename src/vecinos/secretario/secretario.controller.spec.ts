import { Test, TestingModule } from '@nestjs/testing';
import { SecretarioController } from './secretario.controller';
import { SecretarioService } from './secretario.service';

describe('SecretarioController', () => {
  let controller: SecretarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretarioController],
      providers: [SecretarioService],
    }).compile();

    controller = module.get<SecretarioController>(SecretarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
