import { Test, TestingModule } from '@nestjs/testing';
import { VotacionController } from './votacion.controller';
import { VotacionService } from './votacion.service';

describe('VotacionController', () => {
  let controller: VotacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotacionController],
      providers: [VotacionService],
    }).compile();

    controller = module.get<VotacionController>(VotacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
