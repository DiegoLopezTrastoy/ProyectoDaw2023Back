import { Invitado } from "src/entities/invitado.entity";

export class CreateOpcionDto {
    texto: string;
    invitados: Invitado;
}
