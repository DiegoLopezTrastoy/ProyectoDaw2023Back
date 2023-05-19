import { User } from "src/entities/user.entity";
import { Comunidad } from "src/entities/comunidad.entity";

export class CreateVecinoDto {
    vivienda: string;
    user: User;
    comunidad: Comunidad;
}
