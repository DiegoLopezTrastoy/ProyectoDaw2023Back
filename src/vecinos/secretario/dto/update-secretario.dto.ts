import { PartialType } from '@nestjs/mapped-types';
import { CreateSecretarioDto } from './create-secretario.dto';

export class UpdateSecretarioDto extends PartialType(CreateSecretarioDto) {}
