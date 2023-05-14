import { User } from "src/user/entities/user.entity";
import { Aviso } from "src/vecinos/aviso/entities/aviso.entity";
import { Comunidad } from "src/vecinos/comunidad/entities/comunidad.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vecino {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    vivienda: string;

    @OneToOne(() => User)
    user: User

    @ManyToMany(() => Comunidad, (comunidad) => comunidad.vecinos)
    comunidad: Comunidad;

}
