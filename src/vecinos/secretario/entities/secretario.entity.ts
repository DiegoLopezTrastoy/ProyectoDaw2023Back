import { User } from "src/user/entities/user.entity";
import { Comunidad } from "src/vecinos/comunidad/entities/comunidad.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Secretario {

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
