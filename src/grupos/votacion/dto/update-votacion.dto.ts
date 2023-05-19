import { PartialType } from '@nestjs/mapped-types';
import { CreateVotacionGrupoDto } from './create-votacion.dto';

export class UpdateVotacionDto extends PartialType(CreateVotacionGrupoDto) {}
