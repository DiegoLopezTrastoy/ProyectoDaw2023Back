import { Evento } from "src/entities/evento.entity";

export class CreateVotacionGrupoDto {
    nombre: string;
    descripcion: string;
    evento: Evento;
}
