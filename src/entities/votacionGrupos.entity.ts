import { Evento } from "src/entities/evento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VotacionGrupos {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToOne(() => Evento)
    evento: Evento;
}
