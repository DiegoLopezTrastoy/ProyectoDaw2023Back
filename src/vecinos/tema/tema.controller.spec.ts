import { Test, TestingModule } from '@nestjs/testing';
import { TemaController } from './tema.controller';
import { TemaService } from './tema.service';

describe('TemaController', () => {
  let controller: TemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemaController],
      providers: [TemaService],
    }).compile();

    controller = module.get<TemaController>(TemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
