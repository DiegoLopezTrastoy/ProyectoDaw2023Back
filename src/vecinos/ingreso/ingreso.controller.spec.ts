import { Test, TestingModule } from '@nestjs/testing';
import { IngresoController } from './ingreso.controller';
import { IngresoService } from './ingreso.service';

describe('IngresoController', () => {
  let controller: IngresoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngresoController],
      providers: [IngresoService],
    }).compile();

    controller = module.get<IngresoController>(IngresoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
