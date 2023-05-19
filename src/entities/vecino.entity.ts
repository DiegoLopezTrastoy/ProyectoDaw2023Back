import { User } from "src/entities/user.entity";
import { Aviso } from "src/entities/aviso.entity";
import { Comunidad } from "src/entities/comunidad.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vecino {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    vivienda: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @OneToOne(() => User)
    user: User

    @ManyToMany(() => Comunidad, (comunidad) => comunidad.vecinos)
    comunidad: Comunidad;

}
