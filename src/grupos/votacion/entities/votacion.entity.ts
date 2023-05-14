import { Evento } from "src/grupos/evento/entities/evento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Votacion {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @ManyToOne(() => Evento)
    evento: Evento;
}
