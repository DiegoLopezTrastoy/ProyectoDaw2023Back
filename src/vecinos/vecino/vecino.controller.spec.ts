import { Test, TestingModule } from '@nestjs/testing';
import { VecinoController } from './vecino.controller';
import { VecinoService } from './vecino.service';

describe('VecinoController', () => {
  let controller: VecinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VecinoController],
      providers: [VecinoService],
    }).compile();

    controller = module.get<VecinoController>(VecinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
