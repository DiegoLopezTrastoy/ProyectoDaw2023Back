import { User } from "src/entities/user.entity";
import { Comunidad } from "src/entities/comunidad.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Presidente {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    fechaInicio: string;

    @Column()
    fechaFin: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @ManyToMany(() => Comunidad)
    @JoinTable()
    comunidades: Comunidad[];
}

