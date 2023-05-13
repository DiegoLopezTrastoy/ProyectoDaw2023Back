import { PartialType } from '@nestjs/mapped-types';
import { CreateOpcionDto } from './create-opcion.dto';

export class UpdateOpcionDto extends PartialType(CreateOpcionDto) {}
