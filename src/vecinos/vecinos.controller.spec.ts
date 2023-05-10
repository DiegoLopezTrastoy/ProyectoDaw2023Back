import { Test, TestingModule } from '@nestjs/testing';
import { VecinosController } from './vecinos.controller';
import { VecinosService } from './vecinos.service';

describe('VecinosController', () => {
  let controller: VecinosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VecinosController],
      providers: [VecinosService],
    }).compile();

    controller = module.get<VecinosController>(VecinosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
