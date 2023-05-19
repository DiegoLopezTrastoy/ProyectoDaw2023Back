import { Comunidad } from "src/entities/comunidad.entity";
import { User } from "src/entities/user.entity";

export class CreatePresidenteDto {
    fechaInicio: string;
    fechaFin: string;
    user: User;
    comunidades: Comunidad[];
}
