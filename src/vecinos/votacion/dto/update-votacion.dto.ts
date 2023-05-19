import { PartialType } from '@nestjs/mapped-types';
import { CreateVotacionVecinosDto } from './create-votacion.dto';

export class UpdateVotacionDto extends PartialType(CreateVotacionVecinosDto) {}
