import { Anfitrion } from "src/entities/anfitrion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    fecha: string;

    @Column()
    motivo: string;

    @Column()
    coste: string;

    @Column()
    lugar: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToOne(() => Anfitrion)
    anfitrion: Anfitrion;
}
