import { User } from "src/entities/user.entity";
import { Comunidad } from "src/entities/comunidad.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vecino {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    vivienda: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @ManyToMany(() => Comunidad, (comunidad) => comunidad.vecinos)
    @JoinTable()
    comunidad: Comunidad;

}
