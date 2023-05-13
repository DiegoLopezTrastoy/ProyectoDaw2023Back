import { PartialType } from '@nestjs/mapped-types';
import { CreateComunidadDto } from './create-comunidad.dto';

export class UpdateComunidadDto extends PartialType(CreateComunidadDto) {}
