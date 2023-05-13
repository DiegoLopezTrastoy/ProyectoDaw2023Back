import { Test, TestingModule } from '@nestjs/testing';
import { ReunionController } from './reunion.controller';
import { ReunionService } from './reunion.service';

describe('ReunionController', () => {
  let controller: ReunionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReunionController],
      providers: [ReunionService],
    }).compile();

    controller = module.get<ReunionController>(ReunionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
