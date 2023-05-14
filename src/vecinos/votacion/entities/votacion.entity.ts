import { Tema } from "src/vecinos/tema/entities/tema.entity";
import { Vecino } from "src/vecinos/vecino/entities/vecino.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Votacion {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({type: "boolean"})
    conformidad: boolean;

    @ManyToMany(() => Vecino)
    vecinos: Vecino[];

    @ManyToOne(() => Tema)
    tema: Tema;
}
