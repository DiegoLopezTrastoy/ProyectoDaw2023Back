import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vecino } from "src/entities/vecino.entity";
import { Gasto } from "src/entities/gasto.entity";

@Entity()
export class Comunidad {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    direccion: string;

    @Column()
    saldo: Number;

    @Column({default: true, type: "boolean"})
    activo: boolean;

    @ManyToMany(() => Vecino, (vecino) => vecino.comunidad)
    vecinos: Vecino[];
}
