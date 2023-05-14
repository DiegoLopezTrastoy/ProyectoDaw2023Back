import { User } from "src/user/entities/user.entity";
import { Comunidad } from "src/vecinos/comunidad/entities/comunidad.entity";
import { Column, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Presidente {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    fechaInicio: string;

    @Column()
    fechaFin: string;

    @OneToOne(() => User)
    user: User

    @ManyToMany(() => Comunidad)
    comunidades: Comunidad[];
}

