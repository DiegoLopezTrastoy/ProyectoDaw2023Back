import { Reunion } from "src/entities/reunion.entity";

export class CreateTemaDto {
    texto: string;
    fechaInicioVotos: string;
    fechaFinVotos: string;
    reunion: Reunion;
}
