import { Test, TestingModule } from '@nestjs/testing';
import { PresidenteController } from './presidente.controller';
import { PresidenteService } from './presidente.service';

describe('PresidenteController', () => {
  let controller: PresidenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresidenteController],
      providers: [PresidenteService],
    }).compile();

    controller = module.get<PresidenteController>(PresidenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
