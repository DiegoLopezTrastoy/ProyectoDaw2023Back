import { PartialType } from '@nestjs/mapped-types';
import { CreatePresidenteDto } from './create-presidente.dto';

export class UpdatePresidenteDto extends PartialType(CreatePresidenteDto) {}
