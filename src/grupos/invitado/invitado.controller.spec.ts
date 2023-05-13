import { Test, TestingModule } from '@nestjs/testing';
import { InvitadoController } from './invitado.controller';
import { InvitadoService } from './invitado.service';

describe('InvitadoController', () => {
  let controller: InvitadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitadoController],
      providers: [InvitadoService],
    }).compile();

    controller = module.get<InvitadoController>(InvitadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
