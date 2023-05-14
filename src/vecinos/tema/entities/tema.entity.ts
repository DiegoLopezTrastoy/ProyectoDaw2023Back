import { Reunion } from "src/vecinos/reunion/entities/reunion.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tema {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    texto: string;

    @Column()
    fechaInicioVotos: string;

    @Column()
    fechaFinVotos: string;

    @ManyToOne(() => Reunion)
    reunion: Reunion;
}
