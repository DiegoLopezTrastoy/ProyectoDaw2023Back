import { PartialType } from '@nestjs/mapped-types';
import { CreateInvitadoDto } from './create-invitado.dto';

export class UpdateInvitadoDto extends PartialType(CreateInvitadoDto) {}
