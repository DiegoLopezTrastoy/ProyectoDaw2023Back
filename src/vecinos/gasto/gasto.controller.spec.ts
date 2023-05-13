import { Test, TestingModule } from '@nestjs/testing';
import { GastoController } from './gasto.controller';
import { GastoService } from './gasto.service';

describe('GastoController', () => {
  let controller: GastoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GastoController],
      providers: [GastoService],
    }).compile();

    controller = module.get<GastoController>(GastoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
