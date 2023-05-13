import { Test, TestingModule } from '@nestjs/testing';
import { InvitadoService } from './invitado.service';

describe('InvitadoService', () => {
  let service: InvitadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitadoService],
    }).compile();

    service = module.get<InvitadoService>(InvitadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
