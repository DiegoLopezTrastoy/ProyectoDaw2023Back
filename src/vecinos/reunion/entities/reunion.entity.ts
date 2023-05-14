import { Comunidad } from 'src/vecinos/comunidad/entities/comunidad.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class Reunion {
    
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    fecha: string;

    @ManyToOne(() => Comunidad)
    comunidad: Comunidad;
}
