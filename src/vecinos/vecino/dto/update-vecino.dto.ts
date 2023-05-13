import { PartialType } from '@nestjs/mapped-types';
import { CreateVecinoDto } from './create-vecino.dto';

export class UpdateVecinoDto extends PartialType(CreateVecinoDto) {}
