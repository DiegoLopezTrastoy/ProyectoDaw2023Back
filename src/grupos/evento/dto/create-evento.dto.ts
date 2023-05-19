import { Anfitrion } from "src/entities/anfitrion.entity";

export class CreateEventoDto {
    fecha: string;
    motivo: string;
    coste: string;
    lugar: string;
    anfitrion: Anfitrion;
}
