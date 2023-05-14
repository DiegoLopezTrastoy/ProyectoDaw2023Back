import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vecino } from "src/vecinos/vecino/entities/vecino.entity";
import { Gasto } from "src/vecinos/gasto/entities/gasto.entity";

@Entity()
export class Comunidad {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    direccion: string;

    @Column()
    saldo: Number;

    @ManyToMany(() => Vecino, (vecino) => vecino.comunidad)
    vecinos: Vecino[];
}
