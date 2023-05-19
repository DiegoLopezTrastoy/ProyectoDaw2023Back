import { Comunidad } from "src/entities/comunidad.entity";

export class CreateReunionDto {
    fecha: string;
    comunidad: Comunidad;
}
