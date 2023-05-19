import { Comunidad } from "src/entities/comunidad.entity";
import { User } from "src/entities/user.entity";

export class CreateSecretarioDto {
    fechaInicio: string;
    fechaFin: string;
    user: User;
    comunidades: Comunidad[];
}
