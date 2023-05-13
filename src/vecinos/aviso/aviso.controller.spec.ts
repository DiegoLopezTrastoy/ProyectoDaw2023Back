import { Test, TestingModule } from '@nestjs/testing';
import { AvisoController } from './aviso.controller';
import { AvisoService } from './aviso.service';

describe('AvisoController', () => {
  let controller: AvisoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvisoController],
      providers: [AvisoService],
    }).compile();

    controller = module.get<AvisoController>(AvisoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
