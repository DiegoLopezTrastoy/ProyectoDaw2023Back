import { Comunidad } from 'src/entities/comunidad.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class Reunion {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    fecha: string;

    @Column({default: true, type: "boolean", select: false})
    activo: boolean;

    @ManyToOne(() => Comunidad)
    comunidad: Comunidad;
}
