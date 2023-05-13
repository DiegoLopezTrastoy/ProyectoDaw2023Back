import { Test, TestingModule } from '@nestjs/testing';
import { AnfitrionController } from './anfitrion.controller';
import { AnfitrionService } from './anfitrion.service';

describe('AnfitrionController', () => {
  let controller: AnfitrionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnfitrionController],
      providers: [AnfitrionService],
    }).compile();

    controller = module.get<AnfitrionController>(AnfitrionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
