import { Anfitrion } from "src/grupos/anfitrion/entities/anfitrion.entity";
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

    @ManyToOne(() => Anfitrion)
    anfitrion: Anfitrion;
}
